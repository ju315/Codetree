const n = Number(require('fs').readFileSync(0).toString().trim());

let res = 0;
let acc = 0;

for (let i = 1; i <= 100; i++) {
    if (acc + i >= n) {
        console.log(i)
        break;
    }

    acc += i;
}
