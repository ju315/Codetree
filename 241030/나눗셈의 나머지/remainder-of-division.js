const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let quotient = input[0];
const b = input[1];

const reminderList = new Array(b).fill(0);

while(quotient > 1) {
    const reminder = quotient%b;
    quotient = Math.floor((quotient / b));

    reminderList[reminder]++;
}

const res = reminderList.reduce((prev, curr) => prev += curr**2, 0);

console.log(res)