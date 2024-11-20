const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let res1 = 0;
let res2 = 0;

for (const num of list) {
    if (num%3 === 0) res1++;
    if (num%5 === 0) res2++;
}

console.log(res1, res2)