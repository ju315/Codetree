const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, queryCnt] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);
const queryList = input.slice(2, input.length);

queryList.forEach((x) => {
    const [type, idx, idx2] = x.split(' ').map(Number);

    if (type === 1) {
        console.log(list[idx - 1]);
    } else if (type === 2) {
        const findIdx = list.findIndex((l) => l === idx);

        console.log(findIdx > -1 ? findIdx + 1 : 0);
    } else {
        const res = list.filter((_, lIdx) => lIdx >= idx - 1 && lIdx <= idx2 - 1);
        console.log(res.join(' '))
    }
})