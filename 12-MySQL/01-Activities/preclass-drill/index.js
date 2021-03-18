const preClassDrill1 = (array) => {
    array.map((item) => {
        return item * 2;
    })
}

const preClassDrill2 = (array, cbFn) => {
    return array.map(cbFn);
}