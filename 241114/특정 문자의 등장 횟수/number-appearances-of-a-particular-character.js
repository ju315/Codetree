const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

const a = 'ee';
const b = 'eb';

let cnt1 = 0;
let cnt2 = 0;

for (let i = 0; i < str.length - 1; i++) {
    const word = str.slice(i, i + 2);

    if (word === a) cnt1++;
    if (word === b) cnt2++;
}

console.log(cnt1, cnt2)