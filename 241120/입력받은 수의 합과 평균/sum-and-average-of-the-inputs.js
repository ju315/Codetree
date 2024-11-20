const [n, ...list] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

for (const num of list) {
    sum += num;
}

console.log(sum, (sum/n).toFixed(1))