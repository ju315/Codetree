const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let q = parseInt(a/b);
let reminder = a%b;
let res = `${q}.`;

for (let i = 0; i < 20; i++) {
    const v = reminder * 10;
    q = parseInt(v/b);
    reminder = v%b;
    res += q;
}

console.log(res);