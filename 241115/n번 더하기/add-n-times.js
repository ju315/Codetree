const fs = require('fs');
const [a, n] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let ans = a;
for (let i = 0; i < n; i++) {
    ans += n;
    console.log(ans)
}