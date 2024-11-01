const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list = input[1].split(' ').map(Number).sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
    const v = list[i];

    const target = list.filter((x) => x === v);

    if (target.length === 1) {
        console.log(v);

        return;
    }
}

console.log(-1)