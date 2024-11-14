const fs = require('fs');
const strList = fs.readFileSync(0).toString().trim().split(' ');

for (let i = 0; i < strList.length; i++) {
    if (i%2 === 1) continue;

    console.log(strList[i])
}