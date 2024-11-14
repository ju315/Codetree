const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();

const a = 'ee';
const b = 'ab';

let aFlag = false;
let bFlag = false;

for (let i = 0; i < str.length - 1; i++){
    const word = str.slice(i, i + 2);
    if (word === a) aFlag = true;
    if (word === b) bFlag = true;

    if (aFlag && bFlag) break;
}

console.log(aFlag ? 'Yes' : 'No', bFlag ? 'Yes' : 'No');

// const existA = str.includes(a);
// const existB = str.includes(b);

// console.log(existA ? 'Yes' : 'No', existB ? 'Yes' : 'No');