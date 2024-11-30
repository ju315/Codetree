const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 1;
for (let i = 1; i <=n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += num + ' ';
        num++;
    }
    console.log(str)
}