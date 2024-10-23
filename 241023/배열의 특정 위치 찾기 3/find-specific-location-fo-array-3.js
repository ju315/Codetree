const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map((x) => Number(x));

const idx = arr.findIndex((x) => x === 0);

const target = arr.slice(idx - 3 >= 0 ? idx - 3 : 0, idx);

const res = target.reduce((prev, curr) => {
    prev += curr;

    return prev;
}, 0)

console.log(res)