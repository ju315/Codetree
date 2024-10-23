const fs = require('fs');

const input = fs.readFileSync(0).toString().split('-');

const [f, m, l] = input;
console.log(`${f}-${l}-${m}`)