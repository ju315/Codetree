const [start, end] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let ans = 0;
for (let i = start; i <= end; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
        if (i%j === 0) cnt++;
        if (cnt > 3) break;
    }

    if (cnt === 3) ans++;
}

console.log(ans)