const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let res = 0;

for (let i = a; i <=b; i++) {
    if (i%6 === 0 && i%8 !== 0) res += i;
}

console.log(res)