const fs = require('fs');
const input = fs.readFileSync(0).toString();

const score = Number(input);

score === 100 ? console.log('pass') : console.log('failure')