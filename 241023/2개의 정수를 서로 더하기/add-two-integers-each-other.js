const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0].trim());
let b = Number(input[1].trim());

a += b;
b += a;
console.log(a, b)