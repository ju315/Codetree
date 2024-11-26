const n = Number(require("fs").readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        str += j
    }

    console.log(str)
}