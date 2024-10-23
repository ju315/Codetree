const fs = require("fs");
let a, b;
a = fs.readFileSync(0).toString();

[a, b] = a.split(' ');

[b, a] = [Number(a), Number(b)];

console.log(a, b);