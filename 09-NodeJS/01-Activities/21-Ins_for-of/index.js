// 1. Using arrays
// const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

// for (const value of songs) {
//   console.log(value);
// }
// Bad Guy
// Old Town Road
// 7 Rings


// 2. Using map
const songs = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);
console.log('songs :', songs);
for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}
// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2
// Object like structure now instead of arrays; key and value can be changed
// to whatever you want to call it