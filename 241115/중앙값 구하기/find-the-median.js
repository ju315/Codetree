const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split(' ').map(Number).sort((a, b) => a - b);

console.log(list[1])