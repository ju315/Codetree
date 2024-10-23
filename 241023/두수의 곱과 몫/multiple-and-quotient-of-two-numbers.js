const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

const [a, b] = input;
console.log(`${a} * ${b} = ${Number(a) * Number(b)}`);
console.log(`${a} / ${b} = ${Number(a) / Number(b)}`)