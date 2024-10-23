const fs = require('fs');
const input = fs.readFileSync(0).toString();

const n = Number(input);

console.log(n**2);
if (n < 5) console.log('tiny')