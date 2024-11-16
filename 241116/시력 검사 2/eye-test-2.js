const fs = require('fs');
const v = Number(fs.readFileSync(0).toString().trim());

if (v >= 1) {
    console.log('High')
} else if (v >= 0.5) {
    console.log('Middle')
} else {
    console.log('Low')
}