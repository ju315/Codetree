const res = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split('')
    .map((x) => {
        const charCode = x.charCodeAt()
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(charCode + 32)
        }

        return String.fromCharCode(charCode - 32)
    })
    .join('');

console.log(res)