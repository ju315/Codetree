const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let ans = 0;
if (a > b) {
    ans = a;
} else {
    ans = b;
}

if (ans < c) {
    console.log(c)
} else {
    console.log(ans)
}