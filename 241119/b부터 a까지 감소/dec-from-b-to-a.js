const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let res = ''
for (let i = b; i >= a; i--) {
    res += i + ' ';
}

console.log(res)