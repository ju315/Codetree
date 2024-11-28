const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 1; i <= 9; i++) {
    let str = '';
    for (let j = b; j >= a; j -= 2) {
        if (j !== b) str += '/ ';
        str += `${j} * ${i} = ${j*i} `
    }

    console.log(str)
}