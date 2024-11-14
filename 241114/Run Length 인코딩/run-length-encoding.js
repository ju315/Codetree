const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();

let cnt = 0;
let ans = '';

for (const char of str) {
    if (cnt === 0) {
        ans += char;
        cnt++;

        continue;
    }

    if (ans[ans.length - 1] === char) {
        cnt++
    } else {
        ans += cnt + char;
        cnt = 1;
    }
}

ans += cnt;

console.log(ans.length)
console.log(ans)