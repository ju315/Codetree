const fs = require('fs');
const patient = fs.readFileSync(0).toString().trim().split('\n')

const cnt = patient.reduce((prev, curr) => {
    const [state, degree] = curr.split(' ');

    if (state === 'Y' && degree >= '37') {
        prev++;
    }

    return prev;
}, 0)


console.log(cnt >=2 ? 'E' : 'N')