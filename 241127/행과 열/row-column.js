const [a, b] = require("fs").readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 1; i <= a; i++) {
    let str = '';

    for (let j = 0; j < b; j++) {
        str += i + j * i + ' ';
    }

    console.log(str)
}