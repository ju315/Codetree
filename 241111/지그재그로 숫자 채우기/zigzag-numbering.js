const fs = require('fs');
const [row, col] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let num = 0;
const arr = Array(row).fill().map(() => Array(col).fill(0));

for (let i = 0; i < col; i++) {
    if (i%2 === 0) {
        for (let j = 0; j < row; j++) {
            arr[j][i] = num;
            num++
        }
    } else {
        for (let j = row -1; j >= 0; j--) {
            arr[j][i] = num;
            num++;
        }
    }
}

for (let data of arr) {
    console.log(data.join(' '))
}