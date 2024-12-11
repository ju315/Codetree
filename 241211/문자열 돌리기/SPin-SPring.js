let text = require('fs').readFileSync(0).toString().trim();

console.log(text);
const len = text.length;
for (let i = 0; i < len; i++) {
    text = text[len - 1] + text.slice(0, len - 1);
    console.log(text);
}