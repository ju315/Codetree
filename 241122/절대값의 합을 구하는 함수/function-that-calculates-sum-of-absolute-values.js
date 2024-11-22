const [n, rest] = require('fs').readFileSync(0).toString().trim().split('\n');

const sum = rest.split(' ').reduce((prev, curr) => prev += Math.abs(curr), 0);
console.log(sum)