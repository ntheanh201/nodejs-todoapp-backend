'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var TodosRoute = _express2.default.Router();

TodosRoute.route('/').get(function (req, res) {
    console.log("GET all todos");
    // res.status(200).send(TodoService.getTodos())
    res.send(_controller.TodoService.getTodos());
});

TodosRoute.route('/:id').get(function (req, res) {
    console.log('GET todo by id');
    res.status(200).send(_controller.TodoService.getTodo(req.params.id));
});

TodosRoute.route('/').post(function (req, res) {
    console.log('POST create new todo');
    res.status(200).send(_controller.TodoService.addTodo(req.body.name, req.body.id));
});

TodosRoute.route('/update/:id').put(function (req, res) {
    console.log("PUT update todo");
    // console.log(req.body)
    res.status(200).send(_controller.TodoService.updateTodo(req.params.id, req.body.todo));
});

TodosRoute.route('/completed').delete(function (req, res) {
    console.log("DELETE completed todo");
    res.status(200).send(_controller.TodoService.clearCompletedTodo());
});

TodosRoute.route('/:id').delete(function (req, res) {
    console.log("DELETE todo");
    res.status(200).send(_controller.TodoService.deleteTodo(req.params.id));
});

TodosRoute.route('/toggleAll').put(function (req, res) {
    console.log("PUT toggle all todos");
    // console.log(req.body)
    res.status(200).send(_controller.TodoService.toggleAllTodo(req.body.toggleStatus));
});

exports.default = TodosRoute;