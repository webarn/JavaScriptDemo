
const http = require('http');

const server = http.createServer((req, res) => {
  //设置响应头,状态码为200
  res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' });
  res.end("<h1>Hole world</h1>")
})

server.listen('8888', () => {
  console.log('启动成功')
})