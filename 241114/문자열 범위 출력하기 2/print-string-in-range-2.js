const fs = require('fs');
const [str, n] = fs.readFileSync(0).toString().trim().split('\n');
const revStr = str.split('').reverse().join('');

if (n >= str.length) {
    console.log(revStr)

    return;
}

console.log(revStr.slice(0, n));


