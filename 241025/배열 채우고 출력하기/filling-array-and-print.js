const fs = require('fs');
const res = fs.readFileSync(0).toString().trim().split(' ').reverse().join('');

console.log(res)