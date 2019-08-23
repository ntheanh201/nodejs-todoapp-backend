'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  type Query {\n    getAllTodos: [Todo]\n    todos(filter: String!): [Todo]\n    todo(id: String!): Todo\n  }\n\n  type Todo {\n    id: String!\n    isDone: Boolean!\n    name: String!\n  }\n\n  input TodoInput {\n    id: String!\n    isDone: Boolean\n    name: String\n  }\n\n  type Mutation {\n    addTodo(input: TodoInput): [Todo]\n    updateTodo(input: TodoInput): [Todo]\n    deleteTodo(id: String!): [Todo]\n    toggleAllTodos(toggleStatus: Boolean!): [Todo]\n    clearCompletedTodos(completed: String!): [Todo]\n  }\n'], ['\n  type Query {\n    getAllTodos: [Todo]\n    todos(filter: String!): [Todo]\n    todo(id: String!): Todo\n  }\n\n  type Todo {\n    id: String!\n    isDone: Boolean!\n    name: String!\n  }\n\n  input TodoInput {\n    id: String!\n    isDone: Boolean\n    name: String\n  }\n\n  type Mutation {\n    addTodo(input: TodoInput): [Todo]\n    updateTodo(input: TodoInput): [Todo]\n    deleteTodo(id: String!): [Todo]\n    toggleAllTodos(toggleStatus: Boolean!): [Todo]\n    clearCompletedTodos(completed: String!): [Todo]\n  }\n']);

var _apolloServerExpress = require('apollo-server-express');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var schema = exports.schema = (0, _apolloServerExpress.gql)(_templateObject);