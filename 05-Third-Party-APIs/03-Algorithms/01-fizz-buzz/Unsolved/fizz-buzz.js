// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number
var numsArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var fizzBuzz = function(arr) {
    // to go through all numbers we need a loop
    for (var i=0; i < arr.length; i++) {
        var number = arr[i];
        console.log('number: ', arr[i]);
        var isDivBy3 = number % 3;
        console.log('isDivBy3: ', isDivBy3);
        var isDivBy5 = number % 5;
        console.log('isDivBy5: ', isDivBy5);

        if (!isDivBy3 && !isDivBy5) {
            console.log('number is evenly divisible by 3: ', number);
            console.log('FIZZ BUZZ');
        } else if (!isDivBy3) {
            console.log('number is evenly divisible by 5: ', number);
            console.log('FIZZ');
        } else if (!isDivBy5) {
            console.log('number is evenly divisible by 3 and 5: ', number);
            console.log('BUZZ');
        } else {
            console.log(number);
        }
    } 
};
