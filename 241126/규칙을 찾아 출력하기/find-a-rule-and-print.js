const n = Number(require("fs").readFileSync(0).toString().trim());

console.log('* '.repeat(n));

for (let i = 1; i < n; i++) {
    let str = '';
    for (let j = 1; j < n; j++) {
        if (j <= i) str += '* '
        else str += '  '
    }

    str += '*'

    console.log(str)
}