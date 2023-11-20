// Create a web server
// 1. Create a web server
// 2. Create a request handler
// 3. Start the server with the handler
// 4. Test the server

// 1. Create a web server
const http = require('http');
const port = 3000;
const hostname = 'localhost';

// 2. Create a request handler
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello World');
};

// 3. Start the server with the handler
const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 4. Test the server
// Open http://localhost:3000/ in the browser
// Hello World should be displayed in the browser
