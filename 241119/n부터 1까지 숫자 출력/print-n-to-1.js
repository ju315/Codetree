const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let res = '';
let i = n;

while (i >= 1) {
    res += i + ' ';
    i--;
}

console.log(res)