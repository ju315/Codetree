const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const d = input.split('\n');

const a = d[0];
const b = Number(d[1]).toFixed(2);
const c = Number(d[2]).toFixed(2);
console.log(a);
console.log(b);
console.log(c);