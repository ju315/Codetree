const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {
    let str = '*'.repeat(i) + ' '.repeat(n - i);
    console.log(str + str.split('').reverse().join(''))
}