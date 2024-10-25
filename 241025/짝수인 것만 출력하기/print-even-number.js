const fs = require('fs');
const res = fs.readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number).filter((x) => x%2 ===0).join(' ');

console.log(res);