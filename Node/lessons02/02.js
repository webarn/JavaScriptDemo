
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url == '/index' || req.url == '/') {
    fs.readFile('./index.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' });
      res.end(data)
    })
  } else if (req.url == '/main') {
    fs.readFile('./main.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' });
      res.end(data)
    })
  } else {
    res.writeHead(404, { 'Content-type': 'text/html;charset=UTF-8' });
    res.end('404!')
  }



})

server.listen('8888', () => {
  console.log('启动成功')
})