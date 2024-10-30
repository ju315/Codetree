const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list = input[1].split(' ').map(Number);
const countList = new Array(9).fill(0);

list.forEach((x) => {
    countList[x - 1]++;
})

countList.forEach((x) => console.log(x))