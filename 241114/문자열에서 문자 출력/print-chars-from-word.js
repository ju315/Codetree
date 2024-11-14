const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();

for (const char of str) {
    console.log(char)
}