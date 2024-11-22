const n = Number(require("fs").readFileSync(0).toString().trim());

let res = n;
let cnt = 0;

while (res !== 1) {
    if (res%2 === 0) res /= 2;
    else res = res*3 + 1;
    cnt++;
}

console.log(cnt)