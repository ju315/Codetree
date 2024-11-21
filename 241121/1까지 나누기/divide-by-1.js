const n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 0;
let v = n;
for (let i = 1; ; i++) {
    cnt++;

    if (Math.floor(v/i) <= 1) {
        console.log(cnt);
        break;
    }

    v = Math.floor(v/i);
}