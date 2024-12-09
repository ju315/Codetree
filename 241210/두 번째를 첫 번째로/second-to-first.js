const text = require('fs').readFileSync(0).toString().trim();

const a = text[0];
const b = text[1];

console.log(text.replaceAll(b, a))