const fs = require('fs');
const [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';
let i = b;

while (i >= a) {
    if (i%2 === 0) {
        str += `${i} `;
    }

    i--;
}

console.log(str)