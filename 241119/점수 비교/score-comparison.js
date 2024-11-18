const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split('\n').map((x) => x.split(' ').map(Number));

if (a[0] > b[0] && a[1] > b[1]) {
    console.log(1)
} else {
    console.log(0)
}