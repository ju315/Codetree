const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let res = 1;
for (let i = a; i <= b; i++) {
    res *=i;
}

console.log(res)