const [a, b, c, d] = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split(/\D/)

console.log(Number(a) + Number(c))