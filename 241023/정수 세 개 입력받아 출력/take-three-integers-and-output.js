const fs = require("fs");
let input = fs.readFileSync(0).toString().split(' ')
let input2 = input[1].split('\n');

let a = Number(input[0]);
let b = Number(input2[0]);
let c = Number(input2[1]);

console.log(a, b, c)