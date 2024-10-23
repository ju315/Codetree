const fs = require('fs')

let input = fs.readFileSync(0).toString().trim();
const arr = input.split(' ').map((x) => Number(x));
for (let i = 2; i < 10; i++) {
    const v = arr[i -2] + arr[i - 1];
    
    if (v >= 10) {
        arr.push(v - 10);
        input += ` ${v - 10}`;
        continue;
    }
    arr.push(v);
    input += ` ${v}`;
}

console.log(input)