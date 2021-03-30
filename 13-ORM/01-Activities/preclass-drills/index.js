// write a function that takes in a number and reverses 
// the order of the digits

const reverseDigits = (num) => {
    const numStr = num.toString();
    let result = '';

    for (var i = numStr.length - 1; i>=0; i--){
        result += numStr[i];
    }
    return parseInt(result);
};

module.exports = {
    reverseDigits
};