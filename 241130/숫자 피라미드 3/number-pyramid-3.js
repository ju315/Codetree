const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = ''
    for (let j = i; j <= i**2; j += i) {
        str += j + ' '
    }

    console.log(str)
}