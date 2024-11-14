const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const strList = input.slice(1, n + 1);
const char = input[n + 1];

let cnt = 0;
let sum = 0;

for (const str of strList) {
    if (str[0] !== char) continue;

    cnt++;
    sum += str.length;
}

console.log(cnt, (sum/cnt).toFixed(2))