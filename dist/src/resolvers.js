'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _todos = [{
    id: 0,
    isDone: false,
    name: 'Todo Item 1'
}, {
    id: 1,
    isDone: true,
    name: 'Todos Item 2'
}];
var _toggleStatus = false;

var resolvers = exports.resolvers = {
    Query: {
        todos: function todos() {
            return _todos;
        },
        todo: function todo(root, _ref) {
            var id = _ref.id;

            return _todos.find(function (todo) {
                return todo.id == id;
            });
        },
        toggleStatus: function toggleStatus() {
            return _toggleStatus;
        }
    },
    Mutation: {
        addTodo: function addTodo(root, _ref2) {
            var input = _ref2.input;

            _todos = [].concat(_toConsumableArray(_todos), [input]);
            return _todos;
        },
        updateTodo: function updateTodo(root, _ref3) {
            var input = _ref3.input;

            var index = _todos.map(function (_ref4) {
                var id = _ref4.id;
                return input.id;
            }).indexOf(input.id);
            var name = _todos[index].name;
            var isDone = _todos[index].isDone;
            _todos[index].name = name === 'undefined' ? name : input.name;
            _todos[index].isDone = isDone === 'undefined' ? isDone : input.isDone;
            return _todos;
        },
        deleteTodo: function deleteTodo(root, _ref5) {
            var id = _ref5.id;

            var index = _todos.map(function (_ref6) {
                var id = _ref6.id;
                return id;
            }).indexOf(id);
            _todos.splice(index, 1);
            return _todos;
        },
        toggleAllTodos: function toggleAllTodos(root, _ref7) {
            var toggleStatus = _ref7.toggleStatus;

            _todos = _todos.map(function (_ref8) {
                var id = _ref8.id,
                    name = _ref8.name;
                return {
                    id: id,
                    isDone: !toggleStatus,
                    name: name
                };
            });
            return _todos;
        }
    }
};