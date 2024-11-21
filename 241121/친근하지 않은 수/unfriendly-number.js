const n = Number(require('fs').readFileSync(0).toString().trim());

let res = 0;

for (let i = 0; i <= n; i++) {
    if (i%2 === 0 || i%3 ===0 || i%5 === 0) continue;
    res++;
}

console.log(res)