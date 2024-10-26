const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const student = Number(input[0]);

const scoreList = Array.from({length: student}, (_, idx) => {
    const score = input[idx+1].split(' ').reduce((prev, curr) => prev += Number(curr), 0) / 4
    return score;
});

let passCnt = 0;

scoreList.forEach((score) => {
    if (score >= 60) {
        console.log('pass');
        passCnt++;
    } else {
        console.log('fail')
    }
});

console.log(passCnt);