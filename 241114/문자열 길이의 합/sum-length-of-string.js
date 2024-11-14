const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const strList = input.splice(1, n);

const count = strList.filter((x) => x[0] === 'a').length;

console.log(strList.join('').length, count);