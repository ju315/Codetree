for (let i = 1; i < 20; i++) {
    let str = '';
    for (let j = 1; j < 20; j++) {
        str += `${i} * ${j} = ${i * j}`;

        if (j === 19) continue;

        if (j%2 === 0) str += '\n'
        else str += ' / '
    }

    console.log(str)
}