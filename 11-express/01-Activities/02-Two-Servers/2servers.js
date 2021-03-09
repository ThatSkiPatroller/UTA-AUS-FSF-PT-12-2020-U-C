// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORTOne = 7000;
const PORTTwo = 7500;

// Create a generic function to handle requests and responses
const handleRequestOne = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`It Works!! Path Hit: ${request.url}`);
};

const handleRequestTwo = (request, response) => {
    response.end("never trust a computer you can't throw out a window");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT1, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORTOne}`);
});

serverTwo.listen(PORT1, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORTTwo}`);
});