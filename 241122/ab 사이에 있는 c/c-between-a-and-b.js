const [a, b, c] = require("fs").readFileSync(0).toString().trim().split(' ').map(Number);

let isExist = false;
for (let i = a; i <= b; i++) {
    if (i%c === 0) {
        isExist = true;
        break;
    }
}

console.log(isExist ? 'YES' : 'NO')