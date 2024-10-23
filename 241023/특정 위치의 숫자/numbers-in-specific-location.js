const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map((x) => Number(x));

console.log(arr[2] + arr[4] + arr[9]);