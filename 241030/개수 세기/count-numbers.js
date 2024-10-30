const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

let matchCnt = 0;
list.forEach((x) => {
    if (x === m) matchCnt++;
});

console.log(matchCnt)