const list = require('fs').readFileSync(0).toString().trim().split('\n');

for (const data of list) {
    if (data == 1) console.log('John');
    else if (data == 2) console.log('Tom');
    else if (data == 3) console.log('Paul')
    else if (data == 4) console.log('Sam');
    else {
        console.log('Vacancy');
        break;
    }
}