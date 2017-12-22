
const app = require('express')();

// const bodyParser = require('body-parser');

// app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log(req.query)
})

app.post

app.listen('3000', () => {
  console.log('ok')
})