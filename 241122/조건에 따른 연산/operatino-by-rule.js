const n = Number(require("fs").readFileSync(0).toString().trim());

let cnt = 0;
let res = n;

while (res < 1000) {
    if (res%2 === 0) res = res * 3 + 1;
    else res = res * 2 + 2;
    cnt ++;
}

console.log(cnt);