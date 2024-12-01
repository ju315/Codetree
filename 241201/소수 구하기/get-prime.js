const n = Number(require('fs').readFileSync(0).toString().trim());

let primNum = [];
for (let i = 2; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
        if (i%j === 0) cnt++;
        if (cnt > 2) break;
    }

    if (cnt === 2) primNum.push(i)
}

console.log(primNum.join(' '));