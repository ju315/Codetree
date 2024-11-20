const n = Number(require('fs').readFileSync(0).toString().trim());

let sum = 1;

for (let i = 2; i < n; i++) {
    if (n%i === 0) sum += i;
}

console.log(sum === n ? 'P' : 'N');