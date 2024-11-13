const fs = require('fs');
const list = fs.readFileSync(0).toString().trim().split('\n').reverse();
for (const data of list) {
    console.log(data)
}