const fs = require('fs');
const num = fs.readFileSync(0).toString().trim();

if (num == 1) {
    console.log('John')
} else if (num == 2) {
    console.log('Tom');
} else if (num == 3) {
    console.log('Paul')
}