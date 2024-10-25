const fs = require('fs');

const sum = fs.readFileSync(0).toString().trim().split(' ').reduce((prev, curr) => prev += Number(curr), 0);

console.log((sum/8).toFixed(1))