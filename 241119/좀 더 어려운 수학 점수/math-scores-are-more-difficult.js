const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split('\n').map((x) => x.split(' ').map(Number));

if (a[0] > b[0]) {
    console.log('A')
} else if (a[0] < b[0]) {
    console.log('B')
} else if (a[1] > b[1]) {
    console.log('A')
} else {
    console.log('B')
}