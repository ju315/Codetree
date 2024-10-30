const fs = require('fs');

const stringList = ['L', 'E', 'B', 'R', 'O', 'S'];
const input = fs.readFileSync(0).toString().trim();

const findIdx = stringList.findIndex((x) => x === input);

console.log(findIdx > -1 ? findIdx : 'None')