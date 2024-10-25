const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const lastIdx = list.findIndex((x) => x >= 250);

if (lastIdx === -1) {
    const sum = list.reduce((prev, curr) => prev += curr, 0);
    console.log(`${sum} ${(sum / list.length).toFixed(1)}`)
    return;
}
const targetList = list.filter((_, idx) => idx < lastIdx);

const sum = targetList.reduce((prev, curr) => prev += curr, 0);
console.log(`${sum} ${(sum / targetList.length).toFixed(1)}`)