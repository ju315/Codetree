const fs = require('fs');
const [n, numberList] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split('\n')

const res = numberList.split(' ')
    .filter((x) => Number(x)%2 === 0)
    .reverse()
    .join(' ');

console.log(res)