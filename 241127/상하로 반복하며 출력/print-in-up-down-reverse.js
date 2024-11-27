const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (j%2 === 0) str += i;
        else str += n - i + 1;
    }

    console.log(str)
}