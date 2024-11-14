const fs = require('fs');
const [str, part] = fs.readFileSync(0).toString().trim().split('\n');

let cnt = 0;

for (let i = 0; i < str.length - 1; i++) {
    const word = str.slice(i, i + part.length);
    
    if (word === part) cnt++;
}

console.log(cnt)