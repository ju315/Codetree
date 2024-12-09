const input = require('fs').readFileSync(0).toString().trim().split('\n');

let [text, cnt] = input[0].split(' ');
const queries = input.slice(1, Number(cnt) + 1).map(query => query.split(' '));

for (const query of queries) {
    if (query[0] === '2') {
        text = text.replaceAll(query[1], query[2])
    } else {
        const a = text[Number(query[1]) - 1];
        const b = text[Number(query[2]) - 1];
        
        let tmp = [...text]
        tmp[Number(query[1]) - 1] = b;
        tmp[Number(query[2]) - 1] = a;

        text = tmp.join('')
    }
    console.log(text)
}