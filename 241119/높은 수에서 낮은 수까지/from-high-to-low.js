const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let res = ''
if (a < b) {
    for (let i = b; i >= a; i--) {
        res += i + ' ';
    }
} else {
    for (let i = a; i >= b; i--) {
        res += i + ' ';
    }
}

console.log(res)