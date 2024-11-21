const n = Number(require('fs').readFileSync(0).toString().trim());

let res = '';

for (let i = 1; i <= n; i++) {
    if (i%2 === 0) continue;
    if (i%3 === 0 && i%9 !== 0) continue;
    const str = String(i);
    if (str[str.length - 1] == 5) continue;

    res += i + ' ';
}

console.log(res)