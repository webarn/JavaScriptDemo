var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index');
  // let title = { title: 'Express', name: 'joea' };
  // res.send(title);
  res.end();
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  res.render('index');
  res.end();
  // let body = req.body;
  // res.render('index', body);
});

module.exports = router;
