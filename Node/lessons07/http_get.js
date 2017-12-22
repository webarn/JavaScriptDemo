const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
  //parse()如果传递两个参数:req.url/true;会把接口和接口参数分离开,而且接口参数会转换为对象类型
  let urlObj = url.parse(req.url, true);
  if (urlObj.pathname == '/index.html' || urlObj.pathname == '/favicon.ico') {
    let rs = fs.createReadStream('./index.html');
    //读取的内容写入到浏览器(res就是写入流,目的地是用户的浏览器)
    rs.pipe(res);
  } else if (urlObj.pathname == '/login.html') {
    fs.createReadStream('./login.html').pipe(res);
  } else if (urlObj.pathname == '/login') {
    if (urlObj.query.user == 'webarn' && urlObj.query.password == '123456') {
      fs.createReadStream('./index.html').pipe(res);
    } else {
      res.write('login error');
      res.end();
    }

  }
});

//监听端口
server.listen(8888, () => {
  console.log('启动成功');
})