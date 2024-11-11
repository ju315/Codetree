const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());


const arr = Array(n).fill().map(() => Array(n).fill(0));

let num = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr[j][i] = num;
        num++;
    }
}

for (let data of arr) {
    console.log(data.join(' '))
}