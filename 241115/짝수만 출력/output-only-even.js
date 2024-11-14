const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = ''
let i = a;

while(i <= b) {
    if (i%2 !== 0) {
        i++;
        continue;
    }

    str += `${i} `;
    i++;
}

console.log(str)