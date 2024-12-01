const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const list = input.slice(1, n + 1).map(Number);

for (const num of list) {
    let v = num;
    let cnt = 0;
    for (; ;) {
        if (v === 1) break;
        if (v%2 === 0) v /= 2;
        else v = v*3 + 1
        cnt++; 
    }

    console.log(cnt)
}