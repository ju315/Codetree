const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = '';
    if (i%2 === 0) {
        for (let j = 0; j < n; j++) str += j + 1;
    } else {
        for (let j = n; j > 0; j--) str += j;
    }

    console.log(str)
}