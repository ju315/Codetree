const fs = require('fs');

const arr = fs.readFileSync(0).toString().trim().split(' ').map((x) => Number(x));

const a = arr.filter((_, idx) => idx % 2 === 0);
const b = arr.filter((_, idx) => idx % 2 !== 0);
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < 5; i++) {
    sum1 += a[i];
    sum2 += b[i];
}

if (sum1 > sum2) console.log(sum1 - sum2);
else console.log(sum2 - sum1);