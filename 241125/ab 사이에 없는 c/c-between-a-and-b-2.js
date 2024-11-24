const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = a; i <=b; i++) {
    if (i%c === 0) {
        console.log('NO');
        return;
    }
}

console.log('YES')