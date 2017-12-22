var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var app = express();
var http = require('request');

app.get('/', function (req, res, next) {
  for (let index = 15000; index < 20000; index++) {
    http.get('http://9czy5.com/video/show/id/' + index, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //返回的body为抓到的网页的html内容
        // var $ = cheerio.load(body); //当前的$符相当于拿到了所有的body里面的选择器
        // var title = $('script');
        res.send(body); return;
      }
      next();
    })
  }

})
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});