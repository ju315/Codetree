const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number).sort((a, b) => b - a);

console.log(input[0], input[1])