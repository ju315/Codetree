const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let ans = '';

if (a === Math.min([b, c])) {
    ans += 1
} else {
    ans += 0
}

if (a === b && b === c) {
    ans += ` 1`
} else {
    ans += ` 0`
}

console.log(ans)