const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [aLen, bLen] = input[0].split(' ').map(Number);
const aList = input[1].split(' ').map(Number);
const bList = input[2].split(' ').map(Number);

let startIdx = aList.findIndex((x) => x === bList[0]);

if (startIdx === -1) {
    console.log('No');

    return;
}

while(true) {
    let cnt = 0;
    for (let i = 0; i < aLen; i++) {
        if (aList[i + startIdx] === bList[i]) {
            cnt++;
            continue;
        } else {
            break;
        }
    }

    if (cnt === bLen) {
        console.log('Yes');

        break;
    }

    startIdx = aList.findIndex((x, idx) => x === bList[0] && idx > startIdx);

    if (startIdx === -1) {
        console.log('No');

        break;
    }
}