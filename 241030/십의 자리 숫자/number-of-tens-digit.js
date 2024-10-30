const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ')

const findZero = input.findIndex((x) => Number(x) === 0);
const targetList = findZero === -1 ? input : input.filter((_, idx) => idx < findZero);

const numCount = new Array(9).fill(0);

targetList.forEach((x) => {
    if (x.length === 1) return;

    const n = Number(x.split('')[0])
    numCount[n - 1]++;
});

numCount.forEach((x, idx) => {
    console.log(`${idx + 1} - ${x}`)
})