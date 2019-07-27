const express = require('express');
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
  res.send('Welcome to Express');
});

app.get('/about', function (req, res) {
  res.send('This is about page')
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});