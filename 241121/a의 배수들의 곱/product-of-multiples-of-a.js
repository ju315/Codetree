const [a, b] = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);

let res = 1;

for (let i= 1; i <=b; i++) {
    if (a%i === 0) res *= i;
}

console.log(res)