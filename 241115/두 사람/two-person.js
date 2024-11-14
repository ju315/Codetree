const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input.map((x) => x.split(' '));

if ((Number(a[0]) >= 19 && a[1] === 'M') || (Number(b[0]) >= 19 && b[1] === 'M')) {
    console.log(1)
} else {
    console.log(0)
}