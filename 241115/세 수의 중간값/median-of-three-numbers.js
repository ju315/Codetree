const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ');

if (b > a && b < c) {
    console.log(1)
} else {
    console.log(0)
}