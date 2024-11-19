const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let res = '';
let i = 3;

while (i <= n) {
    res += i + ' ';
    i += 3;
}

console.log(res)