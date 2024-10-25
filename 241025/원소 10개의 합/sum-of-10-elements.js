const fs = require('fs');
const res = fs.readFileSync(0).toString().trim().split(' ').reduce((prev, curr) => prev += Number(curr), 0);

console.log(res);