const char = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split('')
    .filter((x) => (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) || (x.charCodeAt() >= 97 && x.charCodeAt() <= 122))
    .join('')
    .toUpperCase();

console.log(char);