const list = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

for (const data of list) {
    if (data < 25) console.log('Higher');
    if (data > 25) console.log('Lower');
    if (data === 25) {
        console.log('Good')
        break;
    }
}