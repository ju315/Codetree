const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

const h = Number(input[0]);
const w = Number(input[1]);

const b = parseInt(10000 * w / h**2);

console.log(b);
if(b >= 25) console.log('Obesity')