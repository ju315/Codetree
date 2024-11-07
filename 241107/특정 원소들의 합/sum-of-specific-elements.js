const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map((x) => x.split(' ').map(Number));

let sum = 0;

for (let i = 0; i < 4 ; i++) {
    for (let j = 0; j <= i; j++) {
        sum +=input[i][j]
    }
}

console.log(sum)