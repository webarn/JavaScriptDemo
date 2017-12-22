var express = require('express');
var router = express.Router();

console.log('进入/')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
})

router.route('/login').get((req, res, next) => {
  res.render('login');
}).post((req, res) => {
  let user = {
    username: 'admin',
    password: '123456'
  };
  if (req.body.username === user.username && req.body.password === user.password) {
    res.redirect('/users');
  } else {
    res.redirect('/login');
  }
})

router.get('/logout', function (req, res) {
  res.redirect('/');
});

router.get('/home', function (req, res) {
  var user = {
    username: 'admin',
    password: '123456'
  }
  res.render('home');
});

module.exports = router;
