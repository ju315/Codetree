const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let res = '';
let i = 1;

while (i <= n) {
    if (i%3 === 0 || `${i}`.includes(3) || `${i}`.includes(6) || `${i}`.includes(9)) {
        res += 0 + ' ';
    } else {
        res += i + ' ';
    }
    i++;
}

console.log(res);