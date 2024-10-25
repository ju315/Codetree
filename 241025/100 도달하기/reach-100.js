const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

const res = [1, n];

for (let i = 2; ; i++) {
    const value = res[i-2] + res[i-1];
    res.push(value);
    if (value >= 100) break;
}

console.log(res.join(' '))