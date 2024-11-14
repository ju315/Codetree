const fs = require("fs");
const [str, part] = fs.readFileSync(0).toString().trim().split('\n');

const index = str.indexOf(part);

console.log(index)