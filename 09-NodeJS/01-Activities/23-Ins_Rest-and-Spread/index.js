// // without rest
// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. rest
// tells javascript no matter how many arguments, collect them all and be an array
// of arguments to iterate through
// function add(...nums) {
//   console.log('nums: ', nums);
//   let sum = 0;
//   for (let num of nums) sum += num;
//   return sum;
// }

// console.log(add(1)); // => 1
// console.log(add(3, 3)); // => 6
// console.log(add(1, 1, 4, 5)); // => 11

// // 2. 
// function howManyArgs(...args) {
//   return `You passed ${args.length} arguments.`; // point out the template literal
// }

// console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
// console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
