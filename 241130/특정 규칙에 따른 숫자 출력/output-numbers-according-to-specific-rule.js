const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 1;

for (let i = 1; i <= n; i++) {
    let str = ''
    for (let j = 1; j <=n; j++) {
        if (j < i) str += '  '
        else {
            str += num + ' ';
            if (num === 9) num = 1;
            else num++;
        }
    }

    console.log(str)
}