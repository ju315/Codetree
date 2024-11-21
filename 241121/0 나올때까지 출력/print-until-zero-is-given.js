const list = require('fs').readFileSync(0).toString().trim().split('\n');

for (const data of list) {
    if (data == 0) break;
    console.log(data)
}