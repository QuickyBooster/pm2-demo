const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HELLO, HEAVEN!\n');
});

server.listen(3781, () => {
  console.log('Server is listening on port 3781');
});
