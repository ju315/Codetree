const fs = require('fs');

const list = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const zeroIdx = list.findIndex((x) => x === 0);

const res = list.filter((_, idx) => idx < zeroIdx).map((x) => x%2 === 0 ? parseInt(x/2) : x + 3).join(' ');

console.log(res);