const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.forEach((x) => console.log(x.toUpperCase()))