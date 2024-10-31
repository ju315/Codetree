const fs = require('fs');
const maxVal = fs.readFileSync(0).toString().trim().split(' ').map(Number).sort((a, b) => b - a)[0];

console.log(maxVal)