const text = require('fs').readFileSync(0).toString().trim();

console.log(text.slice(0, 1) + text.slice(2, text.length - 2) + text.slice(text.length - 1))