const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const maxNum = [...new Set(input[1].split(' ').map(Number))].sort((a, b) => b - a)[0];

console.log(maxNum || -1)