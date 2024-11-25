const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i))
    console.log()
}

for (let i = n - 1; i > 0; i--) {
    console.log('*'.repeat(i))
    console.log()
}