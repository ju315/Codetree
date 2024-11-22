const a = Number(require("fs").readFileSync(0).toString().trim());

let i = 1;
let res = 0;

while (i <= a) {
    res += i;
    i++;
}

console.log(res)