const fs = require('fs');
const input = fs.readFileSync(0).toString();

const n = Number(input);

if (n < 0) {
    console.log('ice')
} else if (n >= 100) {
    console.log('vapor')
} else {
    console.log('water')
}