const list = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

let cnt = 0;
let sum = 0;
for (const age of list) {
    if (age < 20 || age > 29) break;
    cnt++;
    sum += age;
}

console.log((sum/cnt).toFixed(2))