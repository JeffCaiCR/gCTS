const http = require('node:http');

const port = Number(process.env.PORT || 8080);
const version = process.env.DEMO_VERSION || 'local';

const server = http.createServer((req, res) => {
  const headers = { 'content-type': 'application/json; charset=utf-8' };
  if (req.url === '/health') {
    res.writeHead(200, headers);
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  res.writeHead(200, headers);
  return res.end(JSON.stringify({
    message: 'SAP BTP + GitHub CI/CD demo is running',
    version,
    timestamp: new Date().toISOString()
  }));
});

server.listen(port, () => console.log(`Listening on ${port}`));

module.exports = { server };
