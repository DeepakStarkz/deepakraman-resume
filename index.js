const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3001;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    'build',
    req.url === '/' ? 'index.html' : req.url,
  );

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      console.error(`File not found: ${filePath}`);
      return;
    }

    let contentType = 'text/html';
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm',
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
    console.log(`Served: ${filePath} with Content-Type: ${contentType}`);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`To stop the server, press Ctrl+C`);
});
