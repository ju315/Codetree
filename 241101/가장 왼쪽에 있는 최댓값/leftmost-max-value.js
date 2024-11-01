const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let list = input[1].split(' ').map(Number);

const idxList = [];

while (true) {
    const maxNum = Math.max(...list);
    const idx = list.findIndex((x) => x === maxNum);

    idxList.push(idx + 1);
    list = list.splice(0, idx);
    if (idx === 0) break;
}


console.log(idxList.join(' '));