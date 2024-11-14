const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split('').filter((_, idx) => idx%2 === 1).reverse().join('');;

console.log(str)