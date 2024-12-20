const res = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .match(/[a-zA-z0-9]/g)
    .join('')
    .toLowerCase();

console.log(res)