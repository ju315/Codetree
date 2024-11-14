const fs = require('fs');
const strList = fs.readFileSync(0).toString().trim().split(' ').reverse();

for (const str of strList) {
    console.log(str)
}