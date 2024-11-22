const [a, b ] = require("fs").readFileSync(0).toString().trim().split(' ').map(Number);

let flag = 0;

for (let i = a ; i <= b; i++) {
    if (1920%i === 0 && 2880%i === 0) {
        flag = 1;
        break;
    }
}

console.log(flag)