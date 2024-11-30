const input = require('fs').readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const list = input.slice(1, n +1).map((x) => x.split(' ').map(Number));

for (let i = 0; i < n; i++) {
    let res = 1;
    const a = list[i][0];
    const b = list[i][1];
    for (let j = a; j <= b; j++) {
        res *= j;
    } 

    console.log(res)
}