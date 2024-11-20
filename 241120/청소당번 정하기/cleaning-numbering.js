const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let res1 = 0;
let res2 = 0;
let res3 = 0;
for (let i = 1; i <= n; i++) {
    if (i%2 === 0) {
        if (i%3 === 0) {
            res2++;
        } else if (i%12 === 0) {
            res3++;
        } else {
            res1++;
        }
    } else if (i%3 === 0) {
        if (i%12 === 0) {
            res3++;
        } else {
            res2++;
        }
    } else if (i%12 === 0) {
        res3++;
    }
}

console.log(res1, res2, res3)