let [a, b] = require('fs').readFileSync(0).toString().trim().split('\n');

while(true) {
    const idx = a.indexOf(b);

    if (idx === -1) break;

    a = a.replace(b, '');
}
console.log(a)