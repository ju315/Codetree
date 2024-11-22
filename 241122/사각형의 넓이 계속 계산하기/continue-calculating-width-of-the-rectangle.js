const list = require("fs").readFileSync(0).toString().trim().split('\n');

for (const str of list) {
    const [w, h, c] = str.split(' ');
    console.log(w*h)
    if (c === 'C') break;
};
