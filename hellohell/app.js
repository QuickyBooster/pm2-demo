const http = require('http');
const port = process.env.PORT // environment variable in the ../app.config.js
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('Server is listening on port ',3001);
  res.end('olleH, lleH!\n');
});

server.listen(3001, () => {
  console.log('Server is listening on port ',3001);
});
