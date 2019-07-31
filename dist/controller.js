'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TodoService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
    function Todo() {
        _classCallCheck(this, Todo);

        this.todos = [{
            id: '0',
            isDone: false,
            name: "Todo Item 1"
        }, {
            id: '1',
            isDone: true,
            name: "Todo Item 2"
        }];
    }

    _createClass(Todo, [{
        key: 'getTodos',
        value: function getTodos() {
            return this.todos;
        }
    }, {
        key: 'getTodo',
        value: function getTodo(todoId) {
            return this.todos.find(function (_ref) {
                var id = _ref.id;
                return id === todoId;
            });
        }
    }, {
        key: 'addTodo',
        value: function addTodo(name) {
            this.todos = [].concat(_toConsumableArray(this.todos), [{ id: (0, _uuid2.default)(), isDone: false, name: name }]);
        }
    }, {
        key: 'updateTodo',
        value: function updateTodo(todoId, newTodo) {
            var index = this.todos.map(function (_ref2) {
                var id = _ref2.id;
                return id;
            }).indexOf(todoId);
            var oldName = this.todos[index].name;
            var oldIsDone = this.todos[index].isDone;
            this.todos[index].name = typeof newTodo.name !== "undefined" ? newTodo.name : oldName;
            this.todos[index].isDone = typeof newTodo.isDone !== 'undefined' ? newTodo.isDone : oldIsDone;
        }
    }, {
        key: 'deleteTodo',
        value: function deleteTodo(todoId) {
            var index = this.todos.map(function (_ref3) {
                var id = _ref3.id;
                return id;
            }).indexOf(todoId);
            this.todos.splice(index, 1);
        }
    }, {
        key: 'clearCompletedTodo',
        value: function clearCompletedTodo() {
            this.todos = this.todos.filter(function (_ref4) {
                var isDone = _ref4.isDone;
                return !isDone;
            });
        }
    }]);

    return Todo;
}();

var TodoService = exports.TodoService = new Todo();