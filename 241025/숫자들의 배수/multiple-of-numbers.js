const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const res = [];
let count = 0;

for (let i = n; ; i += n) {
    if (i%n === 0 && i%5 ===0) count++;
    res.push(i);
    if (count === 2) break;
}

console.log(res.join(' '));