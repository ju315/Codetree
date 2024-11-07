const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map((x) => x.split(' ').map(Number));

const sumV = [0, 0, 0, 0];
const sumH = [0, 0];
let sum = 0;

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
        sumH[i] += input[i][j];
        sumV[j] += input[i][j];
        sum += input[i][j];
    }
}

console.log(sumH.map((x) => (x/4).toFixed(1)).join(' '));
console.log(sumV.map((x) => (x/2).toFixed(1)).join(' '));
console.log((sum/8).toFixed(1))