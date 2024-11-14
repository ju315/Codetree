const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numStr = input[1].replace(/ /g, '');

for (let i = 0; ; i += 5) {
    if (i >= numStr.length) {
        break;
    }

    console.log(numStr.slice(i, i + 5))
}