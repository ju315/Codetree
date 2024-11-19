const fs = require("fs");
const [n, ...list] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

list.forEach((x) => {
    if (x%3 === 0 && x%2 === 1) console.log(x)
});