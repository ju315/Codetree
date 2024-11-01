const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list = input[1].split(' ').map(Number);

let min = 100 - 1;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const v = Math.abs(list[i] - list[j]);

        if (v < min) min = v;
    }
}

console.log(min)