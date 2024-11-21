const n = Number(require('fs').readFileSync(0).toString().trim());

let res = 1;

for (let i = 2; ; i++) {
    if (res + i >= n) break;
    res += i;
}

console.log(res)