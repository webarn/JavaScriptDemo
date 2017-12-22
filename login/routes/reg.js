var express = require('express');
var router = express.Router();
const User = require('../mongo/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('reg');
});

router.post('/', (req, res) => {
  // res.send('登录成功');
  let user = new User({
    username: req.body.username,
    password: req.body.password,
    date: new Date()
  });
  user.save((err, data) => {
    if (err) {
      res.json({ 'status': 0 })
    } else {
      console.log('secc: ' + data);
      res.json({ 'status': 1 });
    }
  })
})

module.exports = router;
