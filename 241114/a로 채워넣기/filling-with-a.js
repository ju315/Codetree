const fs = require('fs');

const strList = fs.readFileSync(0).toString().trim().split('');

strList[1] = 'a';
strList[strList.length - 2] = 'a';

console.log(strList.join(''))