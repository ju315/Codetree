const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 9;

for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n; j++) {
        str += num;
        if (num === 1) num = 9;
        else num--;
    }

    console.log(str)
}