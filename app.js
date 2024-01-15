const http = require('http');

//create server
//looking for 2 parameters: req = incoming request. res = what we are sending back.
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('welcome to our homepage');
  }
  if (req.url === '/about') {
    return res.end('about page');
  }
  res.end(`
  <h1>Oops</h1>
  <p>we can't find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

//what port our server will listen to
server.listen(5000);
