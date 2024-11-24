const list = require('fs').readFileSync(0).toString().trim().split("\n").map(Number);

for (const data of list) {
    if (data%3 !== 0) {
        console.log(0);
        return;
    }
}

console.log(1)