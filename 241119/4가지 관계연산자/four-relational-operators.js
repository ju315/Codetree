const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(Number(a >= b));
console.log(Number(a > b));
console.log(Number(b >= a));
console.log(Number(b > a));