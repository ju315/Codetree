const text = require('fs').readFileSync(0).toString().trim().split('');

const first = text.shift();
console.log([...text, first].join(''))