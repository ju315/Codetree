const list = require('fs').readFileSync(0).toString().trim().split("\n").map(Number);

let cnt = 0;
for (let i = 0; i <= list.length; i++) {
    if (cnt === 3) break;
    if (list[i]%2 !== 0) continue;

    console.log(Math.floor(list[i]/2));
    cnt++;
}