const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const arr = Array(n).fill(0).map(() => Array(m).fill(0));
const newArr = arr.map((x, idx) => x.map((_, idx2) => idx*m + idx2 + 1));

for (const x of newArr) {
    console.log(x.join(' '))
}