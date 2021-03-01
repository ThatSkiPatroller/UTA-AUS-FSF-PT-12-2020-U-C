// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// the Spread operator
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// Every object in the songs array
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // executes a function on each element of the array, the accumulator being 0
  // first argument is always accumulator, second is current value of array
  // first time it runs a will be zero and b 
    return array.reduce((accumulator, value) => {
      console.log('accumulator: ', accumulator);
      console.log('value', value);
      accumulator = accumulator + value;
      return accumulator;
    }, 0);
};
// TODO: What do you expect to be logged in the console?
// 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// Spread operator
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// 110
console.log(additionSpread(1, 2, 3, 4, 100));
