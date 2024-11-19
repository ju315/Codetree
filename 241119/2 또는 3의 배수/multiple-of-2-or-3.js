const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let res = ''
for (let i = 1; i <= n; i++) {
    if (i%2 === 0 || i%3 === 0) {
        res += '1 ';
    } else {
        res += '0 '
    }
}

console.log(res)