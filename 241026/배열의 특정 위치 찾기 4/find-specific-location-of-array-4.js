const fs = require('fs');
const inputList = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let count = 0;
let sum = 0;

const zeroIdx = inputList.findIndex((x) => x === 0);
const limitIdx = zeroIdx > -1 ? zeroIdx : inputList.length;
for (let i = 0; i < limitIdx; i++) {
    const v = inputList[i];

    if (v%2 === 0) {
        count++;
        sum += v;
    }
}

console.log(count, sum);