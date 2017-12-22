const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  if (urlObj.pathname == '/login.html') {
    fs.createReadStream(__dirname + '/login.html').pipe(res);
  } else if (urlObj.pathname == '/login') {
    const ws = fs.createWriteStream(__dirname + '/data.json');
    //获取到post提交的数据
    req.on('data', (chunk) => {
      ws.write(chunk);
    });
    res.end();
  }
});

//监听端口
server.listen(8888, () => {
  console.log('启动成功');
})