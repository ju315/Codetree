const [n, ...list] = require('fs').readFileSync(0).toString().trim().split('\n');

const sum = list.reduce((prev, curr) => prev += Number(curr), 0).toString().split('');
const a = sum.shift();

console.log([...sum, a].join(''))