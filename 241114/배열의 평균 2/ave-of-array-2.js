const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = Array(3).fill().map((_, idx) => input[idx].split(' ').map(Number));

const hSum = Array(3).fill(0);
const vSum = Array(3).fill(0);
let sum = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        hSum[i] += arr[i][j]
        vSum[j] += arr[i][j]
        sum += arr[i][j]
    }
}

console.log(hSum.map((x) => (x/3).toFixed(1)).join(' '));
console.log(vSum.map((x) => (x/3).toFixed(1)).join(' '));
console.log((sum/9).toFixed(1))