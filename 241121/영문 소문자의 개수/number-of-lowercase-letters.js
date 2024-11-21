const [n, rest] = require('fs').readFileSync(0).toString().trim().split('\n');
const list = rest.split(' ');

const otherIdx = list.findIndex((x) => x.charCodeAt() < 97);
const dataList = list.filter((_, idx) => idx < otherIdx).sort();
const uniqueList = [...new Set(dataList)];

for (const char of uniqueList) {
    console.log(char + ' : ' + dataList.filter((x) => x === char).length)
}