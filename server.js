const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify({ message: "Hello from event-consumer", group: "event-processors" }));
});

server.listen(8080, () => {
  console.log("event-consumer listening on port 8080");
});