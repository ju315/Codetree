const fs = require("fs");
let a, b;
a = fs.readFileSync(0).toString();

[a, b] = a.split(' ');

console.log(Number(a) + Number(b));