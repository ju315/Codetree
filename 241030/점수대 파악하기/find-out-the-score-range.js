const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const scoreList = [];

for (let i = 0; i < input.length; i++) {
    const score = input[i];
    if (Number(score)< 10 && Number(score) > 0) continue;
    if (Number(score) === 0) break;

    scoreList.push(score)
}

const scoreCount = new Array(10).fill(0);

scoreList.forEach((x) => {
    if (x.length === 3) {
        scoreCount[9]++;

        return;
    }

    const score = Number(x.split('')[0]);
    scoreCount[score - 1]++
});

for (let i = scoreCount.length - 1; i >= 0; i--) {
    console.log(`${i + 1}0 - ${scoreCount[i]}`);
}