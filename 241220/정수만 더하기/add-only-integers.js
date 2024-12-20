const res = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .match(/[0-9]/g)
    .reduce((prev, curr) => prev += Number(curr), 0);

console.log(res)