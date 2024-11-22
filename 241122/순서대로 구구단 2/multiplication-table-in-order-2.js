const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const commonFn = (i) => {
    let baseStr = i + ' * '
        let str = '';
        for (let j = 1; j < 10; j++) {
            str += baseStr + j + ' = ' + i*j + '  ';
            if (j%3 === 0) {
                console.log(str);
                str = ''
            }
        }
        console.log('')
}

if (a >= b) {
    for (let i = a; i >= b; i--) {
        commonFn(i)
    }
} else {
    for (let i = a; i <=b; i++) {
        commonFn(i)
    }
}