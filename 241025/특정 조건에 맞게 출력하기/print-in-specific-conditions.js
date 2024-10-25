const fs = require('fs');

const res = fs.readFileSync(0).toString().trim().split(' ').map(Number).filter((x) => x !== 0).map((x) => x%2 === 0 ? parseInt(x/2) : x + 3).join(' ');

console.log(res);