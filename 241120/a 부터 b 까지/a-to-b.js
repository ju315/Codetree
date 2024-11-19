const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let res = '';
let i = a;

while (i <= b) {
    res += i + ' '
    if (i%2 === 0) {
        i += 3;
    } else {
        i *= 2
    }
}

console.log(res)