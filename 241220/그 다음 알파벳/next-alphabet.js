const char = require('fs').readFileSync(0).toString().trim();

const code = char.charCodeAt();

if (code === 122) {
    console.log('a');

    return;
}

console.log(String.fromCharCode(code + 1));