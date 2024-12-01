const input = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list = input.slice(1, n + 1).map((x) => x.split(' ').map(Number));

for (const data of list) {
    const a = data[0];
    const b = data[1];
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i%2 === 0) sum += i;
    }

    console.log(sum)
}