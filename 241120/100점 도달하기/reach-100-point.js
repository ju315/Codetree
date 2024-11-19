const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let res = '';
let i = n;

while (i <= 100) {
    if (i >= 90) {
        res += 'A ';
    } else if (i >= 80) {
        res += 'B '
    } else if (i >= 70) {
        res += 'C '
    } else if (i >= 60) {
        res += 'D '
    } else {
        res += 'F '
    }
    i++;
}

console.log(res)