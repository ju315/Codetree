const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {
    console.log('* '.repeat(i))
}

for (let i = 2; i <= n; i++) {
    console.log('* '.repeat(i))
}