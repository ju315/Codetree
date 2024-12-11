const [text, orderKey] = require('fs').readFileSync(0).toString().trim().split('\n');

const len = text.length;
let ans = text;

for (const order of orderKey) {
    if (order === 'L') {
        ans = ans.slice(1, len) + ans[0]
        continue;
    }
    ans = ans[len - 1] + ans.slice(0, len - 1);
}

console.log(ans)