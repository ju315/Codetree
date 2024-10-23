const fs = require('fs');

const input = fs.readFileSync(0).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const add = a + b;
const sub = a - b;
const div = add / sub;
console.log(div.toFixed(2))