const fs = require('fs');
const input = fs.readFileSync(0).toString();

const a = Number(input);

console.log(a);
if (a < 0) console.log('minus')