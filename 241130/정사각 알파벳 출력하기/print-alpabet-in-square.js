const n = Number(require('fs').readFileSync(0).toString().trim());

let charCode = 65;
for (let i = 1; i <=n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        str += String.fromCharCode(charCode);
        charCode++;
    }

    console.log(str)
}