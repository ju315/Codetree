const n = Number(require('fs').readFileSync(0).toString().trim());

let str = '';

for (let i = 0; i < n; i++) {
    str += '*'.repeat(n) + '\n';
}

console.log(str);
console.log(str);