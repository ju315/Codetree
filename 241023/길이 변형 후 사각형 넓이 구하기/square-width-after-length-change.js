const fs = require('fs');

const input = fs.readFileSync(0).toString().split(' ');

const [sW, sH] = input;
const [w, h] = [Number(sW) + 8, Number(sH) * 3];
console.log(w);
console.log(h);
console.log(w*h)