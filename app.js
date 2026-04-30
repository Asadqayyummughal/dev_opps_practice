const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Default Message";

const server = http.createServer((req, res) => {
  res.end(`🚀 ${MESSAGE}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});