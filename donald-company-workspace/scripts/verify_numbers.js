// Node script: verify that numbers in canonical.json appear in generated outputs
const fs = require('fs');
const path = require('path');

function read(file) {
  const p = path.resolve(file);
  return fs.readFileSync(p, 'utf8');
}

try {
  const canonical = JSON.parse(read('donald-company-workspace/canonical.json'));
  const outputs = read('donald-company-workspace/outputs/investor_memo.txt');

  const searchNums = (obj, set = new Set()) => {
    if (typeof obj === 'number') set.add(String(obj));
    else if (Array.isArray(obj)) obj.forEach(x => searchNums(x, set));
    else if (obj && typeof obj === 'object') Object.values(obj).forEach(x => searchNums(x, set));
    return set;
  };

  const nums = [...searchNums(canonical)];
  const missing = nums.filter(n => !outputs.includes(n));
  console.log('Numbers missing in investor memo:', missing);
} catch (err) {
  console.error('Verification failed:', err.message);
  process.exitCode = 1;
}
