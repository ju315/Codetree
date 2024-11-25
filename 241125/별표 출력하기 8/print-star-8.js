const n = Number(require('fs').readFileSync(0).toString().trim());

// for (let i = 1; i <= n; i++) {
//     if (i%2 === 1) {
//         console.log('*')
//         continue;
//     }

//     console.log('* '.repeat(i))
// }

for (let i = 1; i <= n; i++) {
    if (i%2 === 1) {
        console.log('*')
        continue;
    }

    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '* '
    }

    console.log(str)
}
