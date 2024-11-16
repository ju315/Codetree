const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let min = 0;
if (a < b) {
    min = a;
} else {
    min = b;
}

if (min > c) {
    min = c;
}

console.log(min)