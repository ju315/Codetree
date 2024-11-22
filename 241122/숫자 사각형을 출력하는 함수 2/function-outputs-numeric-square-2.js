const n = Number(require('fs').readFileSync(0).toString().trim());

const arr = Array(n).fill().map(() => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    arr[i][0] = i + 1;
    for (let j = 1; j < n; j++) {
        arr[i][j] = arr[i][j - 1] * 2
    }
}

for (const data of arr) {
    console.log(data.join(' '))
}