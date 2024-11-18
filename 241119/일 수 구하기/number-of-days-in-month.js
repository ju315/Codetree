const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(days[n - 1])