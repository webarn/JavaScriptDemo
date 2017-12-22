var express = require('express');
var router = express.Router();
const User = require('../mongo/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
}).post('/', (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  };
  User.find(user, (err, data) => {
    if (err) {
      res.json({ 'status': 0 });
    } else {
      if (data == '') {
        res.json({ 'status': 2 });
      } else {
        res.json({ 'status': 1 });
      }
    }

  })
})


module.exports = router;
