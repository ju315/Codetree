const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = [input[0].split(' '), input[1].split(' '), input[2].split(' ')];
const b = [input[4].split(' '), input[5].split(' '), input[6].split(' ')];

const arr = Array(3).fill(0).map(() => Array(3).fill(0));
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const v = Number(a[i][j]) * Number(b[i][j]);
        arr[i][j] = v
    }
}

for (let data of arr) {
    console.log(data.join(' '))
}