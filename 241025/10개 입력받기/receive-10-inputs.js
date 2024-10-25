const fs = require('fs');

const list = fs.readFileSync(0).toString().trim().split(' ');

const findZero = list.findIndex((x) => x == 0);
const targetList = list.filter((_, idx) => findZero === -1 ? true : idx < findZero);

const sum = targetList.reduce((prev, curr) => prev += Number(curr), 0);

console.log(sum, (sum/targetList.length).toFixed(1));