const fs = require('fs');

const n = Number(fs.readFileSync(0).toString().trim());

if (n%3 === 0) {
    console.log('YES')
} else {
    console.log('NO')
}

if (n%5 === 0) {
    console.log('YES')
} else {
    console.log('NO')
}