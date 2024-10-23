const fs = require('fs');

const input = fs.readFileSync(0).toString().split(' ');

let [sA, sB] = input;
let [a, b] = [Number(sA), Number(sB)];

console.log(a+b);
console.log(a-b);
console.log(parseInt(a/b));
console.log(a%b);