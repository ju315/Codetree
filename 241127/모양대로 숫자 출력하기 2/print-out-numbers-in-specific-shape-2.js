const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 2;
for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n; j++) {
        str += num + ' ';
        if (num === 8) num = 2;
        else num += 2;
    }

    console.log(str)
}