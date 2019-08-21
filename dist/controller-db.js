'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
  function Todo() {
    _classCallCheck(this, Todo);

    this.connector = _mysql2.default.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234theanh',
      database: 'todos'
    });
    this.table = 'todosList';
    this.todos = this.getTodos();
  }

  _createClass(Todo, [{
    key: 'getTodos',
    value: function getTodos() {
      var _this = this;

      var sql = 'SELECT * FROM ' + this.table;
      this.connector.query(sql, function (err, results) {
        var resultArray = Object.values(JSON.parse(JSON.stringify(results)));
        _this.todos = resultArray.map(function (_ref) {
          var id = _ref.id,
              isDone = _ref.isDone,
              name = _ref.name;
          return {
            id: id,
            isDone: isDone == 0 ? false : true,
            name: name
          };
        });
      });
      return this.todos;
    }
  }, {
    key: 'getTodo',
    value: function getTodo(todoId) {
      return this.todos.find(function (_ref2) {
        var id = _ref2.id;
        return id === todoId;
      });
    }
  }, {
    key: 'addTodo',
    value: function addTodo(name, id) {
      this.todos = [].concat(_toConsumableArray(this.todos), [{ id: id, isDone: false, name: name }]);

      var sql = 'INSERT INTO ' + this.table + ' (id, isDone, name) VALUES (\'' + id + '\', 0, \'' + name + '\')';
      this.connector.query(sql, function (err, results) {
        console.log('Insert data into DB successfully');
      });
    }
  }, {
    key: 'updateTodo',
    value: function updateTodo(todoId, newTodo) {
      var index = this.todos.map(function (_ref3) {
        var id = _ref3.id;
        return id;
      }).indexOf(todoId);
      this.todos[index].name = newTodo.name;
      this.todos[index].isDone = newTodo.isDone;
      var isDone = newTodo.isDone === true ? 1 : 0;
      var sql = 'UPDATE ' + this.table + ' SET isDone = \'' + isDone + '\', name = \'' + newTodo.name + '\' WHERE id = \'' + todoId + '\'';
      this.connector.query(sql, function (err, results) {
        console.log(newTodo.name + isDone);
        console.log('Update data in DB successfully');
      });
    }
  }, {
    key: 'deleteTodo',
    value: function deleteTodo(todoId) {
      var index = this.todos.map(function (_ref4) {
        var id = _ref4.id;
        return id;
      }).indexOf(todoId);
      this.todos.splice(index, 1);

      var sql = 'DELETE FROM ' + this.table + ' WHERE id = \'' + todoId;
      this.connector.query(sql, function (err, results) {
        console.log('Delete Todo in DB successfully');
      });
    }
  }, {
    key: 'clearCompletedTodo',
    value: function clearCompletedTodo() {
      this.todos = this.todos.filter(function (_ref5) {
        var isDone = _ref5.isDone;
        return !isDone;
      });

      var sql = 'DELETE FROM ' + this.table + ' WHERE isDone = 1';
      this.connector.query(sql, function (err, results) {
        console.log('Delete completed Todo in DB successfully');
      });
    }
  }, {
    key: 'toggleAllTodo',
    value: function toggleAllTodo(toggleStatus) {
      this.todos = this.todos.map(function (_ref6) {
        var id = _ref6.id,
            name = _ref6.name;
        return {
          id: id,
          isDone: !toggleStatus,
          name: name
        };
      });

      var sql = 'UPDATE ' + this.table + ' SET isDone = \'' + (!toggleStatus === false ? 0 : 1) + '\'';
      this.connector.query(sql, function (err, results) {
        console.log('Toggle all todos');
      });
    }
  }]);

  return Todo;
}();

var TodoService = exports.TodoService = new Todo();