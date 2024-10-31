const fs = require('fs');

const input = fs.readFileSync(0).toString().split(' ').map(Number);

const list = [];

for (const num of input) {
    if (num === 999 || num === -999) break;

    list.push(num);
}

const sortList = list.sort((a, b) => a - b);
console.log(sortList[sortList.length - 1], sortList[0])