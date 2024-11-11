const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
input.shift();

const a = input.slice(0, n).map((x) => x.split(' '));
const b = input.slice(n, n*2).map((x) => x.split(' '));


const arr = Array(n).fill().map(() => Array(m).fill(0));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (Number(a[i][j]) === Number(b[i][j])) arr[i][j] = 0;
        else arr[i][j] = 1;
    }
}

for (const data of arr) {
    console.log(data.join(' '))
}