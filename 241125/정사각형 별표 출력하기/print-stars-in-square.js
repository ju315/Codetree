const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n));
}