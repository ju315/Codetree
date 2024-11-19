const fs = require('fs');
const [c, n] = fs.readFileSync(0).toString().trim().split(" ");

let res = '';
if (c === 'A') {
    for (let i = 1; i <= Number(n); i++) {
        res += i + ' ';
    }
} else {
    for (let i = Number(n); i >=1; i--) {
        res += i + ' ';
    }
}

console.log(res)