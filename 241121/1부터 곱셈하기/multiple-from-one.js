const n = Number(require('fs').readFileSync(0).toString().trim());

let acc = 1;
for (let i = 1; i <= 10; i++) {
    if (acc * i >= n) {
        console.log(i);
        break;
    }

    acc *= i;
}