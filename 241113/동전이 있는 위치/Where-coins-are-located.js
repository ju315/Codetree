const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const posList = input.slice(1, m + 1);

const arr = Array(n).fill().map(() => Array(n).fill(0));

for (const pos of posList) {
    const [r, c] = pos.split(' ').map(Number);

    arr[r - 1][c - 1] = 1;
}

for (const data of arr) {
    console.log(data.join(' '))
}