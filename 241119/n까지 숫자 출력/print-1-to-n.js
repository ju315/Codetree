const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let res = '';
let i = 1;

while (i <= n) {
    res += i + ' ';
    i++;
}

console.log(res)