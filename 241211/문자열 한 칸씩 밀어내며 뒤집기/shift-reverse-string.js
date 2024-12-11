const [input, ...request] = require('fs').readFileSync(0).toString().trim().split('\n');

const [text, _] = input.split(' ');
const reqList = request.map(Number);
const len = text.length;

let ans = text;
for (const req of reqList) {
    if (req === 1) {
        ans = ans.slice(1, len) + ans[0]
    } else if (req === 2) {
        ans = ans[len - 1] + ans.slice(0, len - 1)
    } else {
        ans = ans.split('').reverse().join('')
    }
    console.log(ans)
}