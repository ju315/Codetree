const fs = require("fs");
const list = fs.readFileSync(0).toString().trim().split('\n').map(Number).sort((a, b) => a - b).forEach((x) => {
    if (x%3 === 0 && x%2 === 1) console.log(x)
});