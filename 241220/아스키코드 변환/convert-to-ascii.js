const [char, code] = require('fs').readFileSync(0).toString().trim().split(' ');

let res = '';

res += char.charCodeAt() + ' ' + String.fromCharCode(code);

console.log(res)