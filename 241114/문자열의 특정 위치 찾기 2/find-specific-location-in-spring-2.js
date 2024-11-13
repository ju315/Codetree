const fs = require('fs');
const word = fs.readFileSync(0).toString().trim();

const list = ["apple", "banana", "grape", "blueberry", "orange"];

const includeList = list.filter((x) => x[2] === word || x[3] === word);

for (const data of includeList) {
    console.log(data)
}

console.log(includeList.length);