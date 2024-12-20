const res = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .match(/[A-Za-z0-9]/g)
    .join('')
    .toLowerCase();

console.log(res)