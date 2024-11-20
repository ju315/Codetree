const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let res = 0;
for (let i = n; i <= 100; i++) {
    res += i;
}

console.log(res)