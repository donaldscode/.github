// Node script: verify that numbers in canonical.json appear in generated outputs
const fs = require('fs');
const path = require('path');

// Read canonical data
const canonicalPath = path.join(__dirname, '..', 'canonical.json');
const canonical = JSON.parse(fs.readFileSync(canonicalPath, 'utf8'));

// Function to extract all numbers from an object recursively
const searchNums = (obj, set = new Set()) => {
  if (typeof obj === 'number') {
    set.add(String(obj));
  }
  if (Array.isArray(obj)) {
    obj.forEach(x => searchNums(x, set));
  }
  if (obj && typeof obj === 'object') {
    Object.values(obj).forEach(x => searchNums(x, set));
  }
  return set;
};

// Get all numbers from canonical data
const canonicalNums = [...searchNums(canonical)];

// Check each output file
const outputDir = path.join(__dirname, '..', 'outputs');
const outputFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.txt') || f.endsWith('.md'));

console.log('=== NUMBER VERIFICATION REPORT ===\n');

outputFiles.forEach(file => {
  const filePath = path.join(outputDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`Checking ${file}:`);
  
  const missing = canonicalNums.filter(num => !content.includes(num));
  const found = canonicalNums.filter(num => content.includes(num));
  
  console.log(`  Found: ${found.length}/${canonicalNums.length} numbers`);
  console.log(`  Missing: ${missing.length} numbers`);
  
  if (missing.length > 0) {
    console.log(`  Missing numbers: ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? '...' : ''}`);
  }
  
  // Check for invented numbers (numbers in content not in canonical)
  const contentNums = content.match(/\b\d+(?:\.\d+)?\b/g) || [];
  const invented = contentNums.filter(num => !canonicalNums.includes(num));
  
  if (invented.length > 0) {
    console.log(`  ⚠️  Potentially invented numbers: ${invented.slice(0, 5).join(', ')}${invented.length > 5 ? '...' : ''}`);
  }
  
  console.log('');
});

console.log('=== VERIFICATION COMPLETE ===');