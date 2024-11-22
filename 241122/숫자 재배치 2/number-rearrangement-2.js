const [n, list] = require('fs').readFileSync(0).toString().trim().split('\n');

console.log(list.split(' ').reverse().join(' '))