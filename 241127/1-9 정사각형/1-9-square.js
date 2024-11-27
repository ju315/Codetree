const n = Number(require('fs').readFileSync(0).toString().trim());

let num = 1;
for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        str += num;
        
        if (num === 9) num = 1
        else num++;
    }

    console.log(str)
}