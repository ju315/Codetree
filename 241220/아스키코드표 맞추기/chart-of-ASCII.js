const res = require('fs').readFileSync(0).toString().split(' ').map((code) => String.fromCharCode(code)).join(' ');

console.log(res)