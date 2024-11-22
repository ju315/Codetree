require('fs').readFileSync(0).toString().trim().split(' ').forEach((word, idx) => {
    if ((idx+1)%2 === 0) console.log(word)
})