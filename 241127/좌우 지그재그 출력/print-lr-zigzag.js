const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 1;
for (let i = 0; i < n; i++) {
    let str = '';
    if (i%2 === 0) {
        for (let j = 0; j < n; j++) {
            str += num + ' ';
            num++;
        }
        num += n - 1;
    } else {
        for (let j = 0; j< n; j++) {
            str += num + ' ';
            num--;
        }

        num += n + 1;
    }
    console.log(str)
}