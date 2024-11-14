const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if (a <= 0) {
    console.log(0);
    return;
}

let ans = '';
for (let i = 0; i < b; i++) {
    ans += a;
}

console.log(ans)