const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split(' ');

const value = str1.slice(0, 2);

const newStr = str2.split('');
newStr[0] = value[0];
newStr[1] = value[1];

console.log(newStr.join(''))