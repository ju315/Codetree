const char = require('fs').readFileSync(0).toString().trim();
const code = char.charCodeAt();

if (code === 97) {
    console.log('z');

    return;
}

console.log(String.fromCharCode(code - 1))