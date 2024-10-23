const fs = require("fs");

let input;
input = fs.readFileSync(0).toString();

let a = Number(input);
console.log(a + 2);