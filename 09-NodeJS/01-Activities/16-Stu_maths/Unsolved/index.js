// TODO: Import `maths.js`
const maths = require('./maths.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
var saved = process.argv;
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (operation) {
    case sum: 
        maths.sum(process.argv[3], process.argv[4]);
        break;
    case difference:
        maths.sum(process.argv[])
        break;
    case product:
        maths.sum(process.argv[])
        break;
    case quotient:
        maths.sum(proess.argv[])
        break;
};

const op = process.argv[2];
const firstNum = parseInt(process.argv[3]);
const secondNum = parseInt(process.argv[4]);

if (op === 'sum') {
    const result = maths.sum(firstNum, secondNum);
    console.log('result for sum: ', result);
} else if (op === 'difference') {
    const result = maths.difference(firstNum, secondNum);
    console.log('result for difference: ', result);
}