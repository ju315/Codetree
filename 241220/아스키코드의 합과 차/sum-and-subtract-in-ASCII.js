const codeList = require('fs').readFileSync(0).toString().trim().split(' ').map((char) => char.charCodeAt()).sort((a, b) => b - a);

console.log(codeList[0] + codeList[1], codeList[0] - codeList[1])