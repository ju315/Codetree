const res = require('fs').readFileSync(0).toString().trim().split(' ').map((code) => String.fromCharCode(code)).join(' ');

console.log(res)