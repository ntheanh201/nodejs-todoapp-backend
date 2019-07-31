'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 8123;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//nodemon -x npm start
//npm run development

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/todos', _route2.default);

app.listen(port, function () {
  return console.log('App listening on port ' + port + '!');
});