const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = ' '.repeat(n - i)
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }

    console.log(str)
}

for (let i = n - 1; i > 0; i--) {
    let str = ' '.repeat(n - i)
    for (let j = 1; j <= i; j++) {
        str += '* '
    }

    console.log(str)
}