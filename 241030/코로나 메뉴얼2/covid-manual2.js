const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const condition = new Array(4).fill(0);

for (let i = 0; i < 3; i++) {
    const patient = input[i].split(' ');

    if (patient[0] === 'Y' && Number(patient[1]) >= 37) {
        condition[0]++
    } else if (patient[0] === 'N' && Number(patient[1]) >= 37) {
        condition[1]++
    } else if (patient[0] === 'Y' && Number(patient[1]) < 37) {
        condition[2]++
    } else {
        condition[3]++
    }
}

const isEmerency = condition[0] >= 2;

if (isEmerency) {
console.log(condition.join(' '), 'E')

} else {
    console.log(condition.join(' '))
}