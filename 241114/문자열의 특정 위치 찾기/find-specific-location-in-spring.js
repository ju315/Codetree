const fs = require('fs');
const [str, char] = fs.readFileSync(0).toString().trim().split(' ');

const idx = str.indexOf(char);

console.log(idx === -1 ? 'No' : idx)