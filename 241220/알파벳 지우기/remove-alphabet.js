const [a, b] = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split('\n')
    .map((x) => x.split(/\D/).join(''));

console.log(Number(a) + Number(b));