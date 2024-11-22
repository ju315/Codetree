const n = Number(require("fs").readFileSync(0).toString().trim());

let flag = false;
for (let i = 2; i < n; i++) {
    if (n%i === 0) {
        flag = true;
        break;
    }
}

console.log(flag ? 'C' : 'N')