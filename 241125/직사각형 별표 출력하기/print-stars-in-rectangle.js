const [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 0; i < n; i++) {
    console.log('* '.repeat(m))
}