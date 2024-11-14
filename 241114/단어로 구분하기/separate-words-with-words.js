const fs = require('fs');
const strList = fs.readFileSync(0).toString().trim().split(' ');

for (const str of strList) {
    console.log(str)
}