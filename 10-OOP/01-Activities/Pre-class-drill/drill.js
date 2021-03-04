const getNegative = (numAsString) => {
    const negNum - numAsString * -1;
    if (isNaN(negNum)) throw new Error('not a number!');
    return negNum;
};

console.log(getNegative("1"));
console.log(getNegative("4"));
console.log(getNegative('cow'));
