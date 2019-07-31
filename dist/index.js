'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

var _route = require('./route');

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

app.get('/todos', function (req, res) {
  console.log("GET request all todos");
  res.send(_controller.TodoService.getTodos());
});

app.get('/todos/:id', function (req, res) {
  console.log("GET todo by id");
  res.send(_controller.TodoService.getTodo(req.params.id));
});

app.post('/todos', function (req, res) {
  console.log("POST create new todo");
  console.log(req.body);
  res.send(_controller.TodoService.addTodo(req.body.name));
});

app.put('/todos/:id', function (req, res) {
  console.log("PUT update todo");
  console.log(req.body.name);
  res.send(_controller.TodoService.updateTodo(req.params.id, req.body));
});

app.delete('/todos/completed', function (req, res) {
  console.log("DELETE completed todo");
  res.send(_controller.TodoService.clearCompletedTodo());
});

app.delete('/todos/:id', function (req, res) {
  console.log("DELETE todo");
  res.send(_controller.TodoService.deleteTodo(req.params.id));
});

app.listen(port, function () {
  return console.log('App listening on port ' + port + '!');
});