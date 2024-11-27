const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 0;

for (let i = 0; i < n; i++) {
    let str = ''
    if (i%2 === 0) {
        for (let j = 0; j < n; j++) {
            num++;
            str += num + ' ';
        }
    } else {
        for (let j = 0; j < n; j++) {
            num += 2;
            str += num + ' ';
        }
    }

    console.log(str)
}