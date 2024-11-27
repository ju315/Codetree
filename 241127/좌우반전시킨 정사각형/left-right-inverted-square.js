const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';

    for (let j = i * n; j >= i; j -= i) {
        str += j + ' '
    }

    console.log(str)
}