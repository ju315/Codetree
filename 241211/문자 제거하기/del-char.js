let [text, ...rest] = require('fs').readFileSync(0).toString().trim().split('\n');

const list = rest.map(Number);
for (const data of list) {
    if (data >= text.length) {
        text = text.slice(0, text.length - 1);
    } else {
        text = text.slice(0, data) + text.slice(data + 1, text.length);
    }
    console.log(text)

    if (text.length === 1) break;
}