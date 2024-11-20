const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split('\n').map(Number).filter((x) => x >= 0 && x<= 200);
const sum = list.reduce((prev, curr) => prev += curr, 0);

console.log(sum, (sum/list.length).toFixed(1))