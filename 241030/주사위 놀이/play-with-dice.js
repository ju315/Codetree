const fs = require('fs');

const diceCount = new Array(6).fill(0);
const input = fs.readFileSync(0).toString().trim().split(' ');

input.forEach((x) => {
    diceCount[Number(x) - 1]++;
})

diceCount.forEach((x, idx) => {
    console.log(`${idx + 1} - ${x}`)
})