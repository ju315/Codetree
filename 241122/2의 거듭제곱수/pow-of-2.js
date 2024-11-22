const n = Number(require("fs").readFileSync(0).toString().trim());

let cnt = 1;
let res = n;

while (res !== 2) {
    res /= 2;
    cnt++;
}

console.log(cnt)