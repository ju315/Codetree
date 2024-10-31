const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number).sort((a, b) => a - b);
const minLen = input.filter((x) => input[0] === x).length;

console.log(input[0], minLen)