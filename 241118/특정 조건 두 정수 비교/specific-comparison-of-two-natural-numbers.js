const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let ans = ''
if (a < b) {
    ans += 1
} else {
    ans += 0
}

if (a === b) {
    ans += ` ${1}`
} else {
    ans += ` ${0}`
}

console.log(ans)