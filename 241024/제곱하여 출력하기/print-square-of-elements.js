const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list = input[1].split(' ').map((x) => Number(x));

const res = list.reduce((prev, curr, idx) => {
    if (idx) prev += ' ';
    prev += `${curr**2}`;

    return prev;
}, '')

console.log(res)