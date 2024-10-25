const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const findZero = list.findIndex((x) => x === 0);

const targetList = list.filter((_, idx) => findZero === -1 ? true : idx < findZero).reverse();

console.log(targetList.join(' '))