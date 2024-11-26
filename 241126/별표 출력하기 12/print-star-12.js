const n = Number(require("fs").readFileSync(0).toString().trim());

console.log('* '.repeat(n));
for (let i = 2; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        if (j%2 === 0 && j >= i) str += '* ';
        else str += '  ';
    }

    console.log(str);
}