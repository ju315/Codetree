const fs = require("fs");

const offset = 30.48;

let a = fs.readFileSync(0).toString();
a = Number(a);

const cmSize = a * offset;
console.log(cmSize.toFixed(1))