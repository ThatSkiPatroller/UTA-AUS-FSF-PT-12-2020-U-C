const http = require('http');

const PORT = 8080;

const displayHome = (res) => {
    const myHome = `
    <html>
        <body>
            <h1>Home</h1>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(myHome);
};

const displayFavFoods = (res) => {
    const foods = `
    <html>
        <body>
            <h1>Favorite Foods</h1>
            <ul>
                <li>Tacos</li>
                <li>Burgers</li>
                <li>Cheese</li>
            </ul>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(foods);
};

const displayFavMovies = (res) => {
    const movies = `
    <html>
        <body>
            <h1>Favorite Movies</h1>
            <ul>
                <li>Independence Day</li>
                <li>Iron Man</li>
                <li>Cheaper by the Dozen</li>
            </ul>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(movies);
};

const displayFavFrameworks = (res) => {
    const frameworks = `
    <html>
        <body>
            <h1>CSS Frameworks</h1>
            <ul>
                <li>Bulma</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
            </ul>
        </body>
    </html>`
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(frameworks);
};

const display404 = (url, res) => {
    const myHTML = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };

  const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
      case '/':
        return displayHome(res);
  
      case '/frameworks':
        return displayFavFrameworks(res);

        case '/foods':
            return displayFavFoods(res);
        
        case '/movies':
            return displayFavMovies(res);
  
      default:
        return display404(path, res);
    }
  };

const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
  // Callback triggered when server is successfully listening. Hurray!
  console.log(`Server listening on: http://localhost:${PORT}`);
});