const fs = require('fs');
const [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';

for (let i = b; i >= a; i--) {
    if (i%2 === 0) continue;

    str += `${i} `;
}

console.log(str)