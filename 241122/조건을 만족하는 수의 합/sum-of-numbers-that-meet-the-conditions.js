const n = Number(require('fs').readFileSync(0).toString().trim());

let res = 0;
for (let i = n; i <= 500; i++) {
    if (i%2 === 0) res += i;
}

console.log(res)