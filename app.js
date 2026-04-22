const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from DevOps Demo App \n");
  res.end("Running with ps \n");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
