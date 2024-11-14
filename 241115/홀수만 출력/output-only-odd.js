const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let str = ''
for (let i = a; i <= b; i++) {
    if (i%2 === 0) continue;

    if (str === '') {
        str += i;
        continue;
    }

    str += ` ${i}`
}

console.log(str)