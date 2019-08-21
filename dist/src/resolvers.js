'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _todos = [];
var _toggleStatus = false;

var resolvers = exports.resolvers = {
  Query: {
    todos: function todos(root, _ref) {
      var filter = _ref.filter;

      switch (filter) {
        case 'showAll':
          return _todos;
        case 'showActive':
          return _todos.filter(function (_ref2) {
            var isDone = _ref2.isDone;
            return !isDone;
          });
        case 'showCompleted':
          return _todos.filter(function (_ref3) {
            var isDone = _ref3.isDone;
            return isDone;
          });
      }
    },
    todo: function todo(root, _ref4) {
      var id = _ref4.id;

      return _todos.find(function (todo) {
        return todo.id == id;
      });
    },
    toggleStatus: function toggleStatus() {
      return _toggleStatus;
    }
  },
  Mutation: {
    addTodo: function addTodo(root, _ref5) {
      var input = _ref5.input;

      _todos = [].concat(_toConsumableArray(_todos), [input]);
      return _todos;
    },
    updateTodo: function updateTodo(root, _ref6) {
      var input = _ref6.input;

      // console.log(input)
      var index = _todos.map(function (_ref7) {
        var id = _ref7.id;
        return id;
      }).indexOf(input.id);
      var name = _todos[index].name;
      var isDone = _todos[index].isDone;
      _todos[index].name = name === 'undefined' ? name : input.name;
      _todos[index].isDone = isDone === 'undefined' ? isDone : input.isDone;
      return _todos;
    },
    deleteTodo: function deleteTodo(root, _ref8) {
      var id = _ref8.id;

      var index = _todos.map(function (_ref9) {
        var id = _ref9.id;
        return id;
      }).indexOf(id);
      _todos.splice(index, 1);
      return _todos;
    },
    toggleAllTodos: function toggleAllTodos(root, _ref10) {
      var toggleStatus = _ref10.toggleStatus;

      _todos = _todos.map(function (_ref11) {
        var id = _ref11.id,
            name = _ref11.name;
        return {
          id: id,
          isDone: !toggleStatus,
          name: name
        };
      });
      toggleStatus = !toggleStatus;
      return _todos;
    },
    clearCompletedTodos: function clearCompletedTodos(root, _ref12) {
      var completed = _ref12.completed;

      _todos = _todos.filter(function (_ref13) {
        var isDone = _ref13.isDone;
        return !isDone;
      });
    }
  }
};