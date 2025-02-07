const http = require("http"); 
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); 
  const query = parsedUrl.query;

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ query }));
});
server.listen(4040);
