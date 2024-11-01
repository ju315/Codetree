const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let maxVal = 0, minVal = 1000;

for (const v of list) {
    if (v > 500 && v < minVal) {
        minVal = v;
    } else if (v < 500 && v > maxVal) {
        maxVal = v;
    }
}

console.log(maxVal, minVal)