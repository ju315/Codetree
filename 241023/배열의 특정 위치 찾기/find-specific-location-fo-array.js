const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map((x) => Number(x));

let a = 0;
let b = 0;
let c = 0;

arr.forEach((x, idx) => {
    if ((idx + 1)%2 ===0) {
        a += x;
    }

    if ((idx + 1)%3 === 0) {
        b += x;
        c++;
    }
})

console.log(a, (b/c).toFixed(1))