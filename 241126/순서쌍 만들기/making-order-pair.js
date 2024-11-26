const n = Number(require("fs").readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {
    let str = '';
    for (let j = n; j > 0; j--) {
        str += `(${i},${j}) `
    }

    console.log(str)
}