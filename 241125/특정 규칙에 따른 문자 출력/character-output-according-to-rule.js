const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let space = ' '.repeat((n - i) * 2);
    console.log(space + '@ '.repeat(i))
}

for (let i = n - 1; i > 0; i--) {
    console.log('@ '.repeat(i))
}