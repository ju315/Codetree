const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let earn = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[j] - arr[i] > earn) {
            earn = arr[j] - arr[i]
        }
    }
}

console.log(earn)