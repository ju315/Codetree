const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {
    let space = ' '.repeat((n - i) * 2)
    console.log(space + '* '.repeat(2 * i -1));
}

for (let i = 2; i <=n; i++) {
    let space = ' '.repeat((n - i) * 2)
    console.log(space + '* '.repeat(2 * i -1));
}