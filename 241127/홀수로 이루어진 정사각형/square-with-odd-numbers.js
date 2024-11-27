const n = Number(require("fs").readFileSync(0).toString().trim());

for (let i = 11; i <= 11 + (n - 1) * 2; i +=2) {
    let str = '';

    for (let j = i; j <= i + (n - 1) * 2; j += 2) {
        str += j + ' ';
    }

    console.log(str);
}