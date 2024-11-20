const fs = require('fs');
const [n, ...list] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let res = 0;

for (const num of list) {
    if (num%2 === 1 && num%3 === 0) res += num;
}

console.log(res)