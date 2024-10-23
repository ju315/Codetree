const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(' ').map((x) => Number(x));

const index = arr.findIndex((x) => x%3 ===0);
console.log(arr[index - 1])