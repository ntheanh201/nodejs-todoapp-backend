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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});