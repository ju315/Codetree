const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const a = Number(input[0].trim()) + 87;
const b = Number(input[1].trim())%10;

console.log(a);
console.log(b)