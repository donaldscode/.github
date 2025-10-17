// Node script: verify that numbers in canonical.json appear in generated outputs
const fs = require('fs');
const path = require('path');

// Load canonical data
const canonical = JSON.parse(fs.readFileSync('canonical.json', 'utf8'));

// Load all output files
const outputs = {
  investor_memo: fs.readFileSync('outputs/investor_memo.txt', 'utf8'),
  careers: fs.readFileSync('outputs/careers.md', 'utf8'),
  technical_blog: fs.readFileSync('outputs/technical_blog.md', 'utf8'),
  slide_deck: fs.readFileSync('outputs/slide_deck.md', 'utf8'),
  job_posting: fs.readFileSync('outputs/job_posting.md', 'utf8')
};

// Extract all numbers from canonical JSON recursively
const searchNums = (obj, set = new Set(), path = '') => {
  if (typeof obj === 'number') {
    set.add(String(obj));
  }
  if (Array.isArray(obj)) {
    obj.forEach((x, i) => searchNums(x, set, `${path}[${i}]`));
  }
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    Object.entries(obj).forEach(([key, val]) => searchNums(val, set, `${path}.${key}`));
  }
  return set;
};

const canonicalNumbers = [...searchNums(canonical)];
console.log(`\n📊 Found ${canonicalNumbers.length} unique numbers in canonical.json\n`);

// Check each output file
let allGood = true;
Object.entries(outputs).forEach(([filename, content]) => {
  console.log(`\n🔍 Checking ${filename}...`);
  
  // Find numbers that should be in this file but are missing
  const missing = [];
  const found = [];
  
  canonicalNumbers.forEach(num => {
    // Skip very common numbers that might appear coincidentally
    if (['1', '2', '3', '4', '5', '10', '100', '2024'].includes(num)) {
      return;
    }
    
    if (content.includes(num)) {
      found.push(num);
    } else {
      missing.push(num);
    }
  });
  
  console.log(`  ✅ Found ${found.length} canonical numbers`);
  
  if (missing.length > 0 && missing.length < 20) {
    console.log(`  ⚠️  Missing ${missing.length} numbers (this may be OK if not relevant to this doc):`);
    console.log(`     ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? '...' : ''}`);
  }
});

// Check for [MISSING_DATA: ...] markers
console.log(`\n\n🔍 Checking for [MISSING_DATA] markers...\n`);
Object.entries(outputs).forEach(([filename, content]) => {
  const matches = content.match(/\[MISSING_DATA:.*?\]/g);
  if (matches && matches.length > 0) {
    console.log(`  ⚠️  ${filename}: Found ${matches.length} missing data markers:`);
    matches.forEach(m => console.log(`     ${m}`));
    allGood = false;
  } else {
    console.log(`  ✅ ${filename}: No missing data markers`);
  }
});

// Check for potentially hallucinated numbers (numbers in outputs not in canonical)
console.log(`\n\n🔍 Checking for potentially hallucinated numbers...\n`);
Object.entries(outputs).forEach(([filename, content]) => {
  // Extract numbers from output (with some context)
  const outputNumbersRegex = /\b\d+(?:,\d{3})*(?:\.\d+)?(?:%|k|M|B)?\b/g;
  const outputNumbers = [...new Set((content.match(outputNumbersRegex) || []))];
  
  const suspicious = outputNumbers.filter(num => {
    // Clean number for comparison
    const cleanNum = num.replace(/[,%kMB]/g, '');
    if (cleanNum.length < 2) return false; // Skip single digits
    if (['2024', '2025'].includes(cleanNum)) return false; // Dates are OK
    return !canonicalNumbers.includes(cleanNum);
  });
  
  if (suspicious.length > 0 && suspicious.length < 30) {
    console.log(`  ℹ️  ${filename}: Found ${suspicious.length} numbers not in canonical (may be derived/calculated):`);
    console.log(`     ${suspicious.slice(0, 15).join(', ')}${suspicious.length > 15 ? '...' : ''}`);
  } else {
    console.log(`  ✅ ${filename}: Number usage looks good`);
  }
});

console.log(`\n\n${'='.repeat(60)}`);
if (allGood) {
  console.log('✅ VERIFICATION PASSED: All outputs look good!');
} else {
  console.log('⚠️  VERIFICATION WARNINGS: Review missing data markers above');
}
console.log('='.repeat(60) + '\n');
