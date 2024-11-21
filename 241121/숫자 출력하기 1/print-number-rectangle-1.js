const [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const arr = Array(n).fill().map(() => Array(m).fill(0));
let v = 1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j <m; j++) {
        arr[i][j] = v;
        v++;
    }
}

for (const data of arr) {
    console.log(data.join(' '))
}