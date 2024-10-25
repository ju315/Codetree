const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 2; i < 10; i++) {
    const value = list[i-1] + 2 * list[i-2];
    list.push(value)
}

console.log(list.join(' '))