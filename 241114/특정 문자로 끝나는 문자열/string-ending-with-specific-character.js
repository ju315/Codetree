const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const strList = input.slice(0, 10);
const word = input[10];

const target = strList.filter((x) => x[x.length - 1] === word);

if (target.length === 0 ) {
    console.log('None');

    return;
}

for (const str of target) {
    console.log(str)
}