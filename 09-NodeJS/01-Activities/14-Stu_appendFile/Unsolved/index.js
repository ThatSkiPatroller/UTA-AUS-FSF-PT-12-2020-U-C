// TODO: What are we importing?
// We are importing the fs module that enables us to interact with the file system
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// The first argument is a message and the second is the data to append
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // takes a condition followed by question mark and line to execute if the 
  // condition is truthy, then colon and another line to execute if condition is false
  err ? console.error(err) : console.log('Commit logged!')
);
