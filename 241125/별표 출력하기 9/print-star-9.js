const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = ' '.repeat(n * 2 - 2 * i);
    console.log(str + '* '.repeat(2 * i - 1))
}