const text = require('fs').readFileSync(0).toString().trim();

console.log(text.slice(0, 2) + text.slice(3, text.length - 2) + text.slice(text.length - 1))