const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    const space = ' '.repeat(n - i);
    console.log(space + '*'.repeat(i * 2 - 1))
}

for (let i = n - 1; i >0; i--) {
    const space = ' '.repeat(n - i);
    console.log(space + '*'.repeat(i * 2 - 1))
}