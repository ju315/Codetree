const n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 0;
let sum = 0;
let v = 1000;

for (let i = 2; ; i += 2) {
    if (v <= n) {
        console.log(cnt, sum)
        break;
    }

    v -= i;
    cnt++;
    sum += i;
}