const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 2; i < n; i++) {
    if (n%i === 0) {
        console.log('C')
        return;
    }
}

console.log('P')