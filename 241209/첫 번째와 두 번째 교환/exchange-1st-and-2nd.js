const text = require('fs').readFileSync(0).toString().trim().split('');

const a = text[0];
const b = text[1];

const res = text.reduce((prev, curr) => {
    if (curr === a) {
        prev += b;
    } else if (curr === b) {
        prev += a;
    } else {
        prev += curr;
    }

    return prev;
}, '');

console.log(res)