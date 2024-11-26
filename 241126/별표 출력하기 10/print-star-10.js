const n = Number(require("fs").readFileSync(0).toString().trim());

for (let i = 1; i <= n*2; i++) {
    if (i%2 === 0) {
        console.log('* '.repeat(n - i/2 + 1))
        continue;
    }
    console.log('* '.repeat((i + 1)/2))
}