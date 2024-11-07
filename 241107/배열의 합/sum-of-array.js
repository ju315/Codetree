const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.forEach((x) => {
    const res = x.split(' ').reduce((prev, curr) => prev += Number(curr),0);
    console.log(res)
})