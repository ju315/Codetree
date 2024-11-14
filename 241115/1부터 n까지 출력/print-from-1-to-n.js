const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = ''
for (let i = 1; i <= n; i++) {
    if (i === 1) {
        str += i
        continue;
    }

    str += ` ${i}`;    
}

console.log(str)