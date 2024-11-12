const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const arr = Array(n).fill().map(() => Array(n).fill(0));
let num = 1;

for (let i = n -1; i >= 0; i--) {

    if (i%2 === 0) {
        for (let j = 0; j < n; j++) {
            arr[j][i] = num;
            num++;
        }
        continue;
    }

    for (let j = n - 1; j >= 0; j--) {
        arr[j][i] = num;
        num++;
    }
}

for (const data of arr) {
    console.log(data.join(' '))
}