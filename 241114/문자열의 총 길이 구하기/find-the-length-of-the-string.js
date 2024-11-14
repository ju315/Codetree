const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().replace(/ /g, '');

console.log(str.length);