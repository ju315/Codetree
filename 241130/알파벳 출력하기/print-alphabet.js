const n = Number(require('fs').readFileSync(0).toString().trim());
let charCode = 65;
for (let i = 1; i <=n; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        str += String.fromCharCode(charCode);
        if (charCode === 90) charCode = 65;
        else charCode++;
    }

    console.log(str)
}