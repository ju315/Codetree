const [a, b] = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split(' ')
    .map((x) => {
        return x.split(/\D/)[0]
    });

console.log(Number(a) + Number(b));