const res = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split(' ')
    .reduce((prev, curr) => prev += Number(curr), 0)

const str = res.toString();
console.log(str.length - str.split('1').join('').length)