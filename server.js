const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = Number(process.env.PORT || 4173);
const root = __dirname;
const types = {
  '.html':'text/html; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.webmanifest':'application/manifest+json; charset=utf-8',
  '.svg':'image/svg+xml'
};

const server = http.createServer((request,response) => {
  const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const relative = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
  const filePath = path.resolve(root,relative);

  if (!filePath.startsWith(root)) {
    response.writeHead(403,{'Content-Type':'text/plain; charset=utf-8'});
    return response.end('Forbidden');
  }

  fs.readFile(filePath,(error,data) => {
    if (error) {
      response.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
      return response.end('Not found');
    }
    response.writeHead(200,{
      'Content-Type':types[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control':'no-cache'
    });
    response.end(data);
  });
});

server.on('error',error => {
  if (error.code === 'EADDRINUSE') process.exit(0);
  console.error(error.message);
  process.exit(1);
});

server.listen(port,host,() => {
  console.log(`Ad Altare is ready at http://${host}:${port}/`);
});
