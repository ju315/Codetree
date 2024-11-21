const n = Number(require('fs').readFileSync(0).toString().trim());

let res = 0;

for (let i = 1; ; i++) {
    if (res + i >= n) break;
    res += i;
}

console.log(res)