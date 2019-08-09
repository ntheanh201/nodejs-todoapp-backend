'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.typeDefs = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    type Query {\n        todos: [Todo]\n        todo(id: String!): Todo\n        toggleStatus: Boolean!\n    }    \n\n    type Todo {\n        id: String!\n        isDone: Boolean!\n        name: String!\n    }\n\n    input TodoInput {\n        id: String!\n        isDone: Boolean\n        name: String\n    }\n\n    input Toggle {\n        toggleStatus: Boolean!\n    }\n\n    type Mutation {\n        addTodo(input: TodoInput): [Todo]\n        updateTodo(input: TodoInput): [Todo]\n        deleteTodo(id: String!): [Todo]\n        toggleAllTodos(toggleStatus: Boolean!): [Todo]\n    }\n\n'], ['\n    type Query {\n        todos: [Todo]\n        todo(id: String!): Todo\n        toggleStatus: Boolean!\n    }    \n\n    type Todo {\n        id: String!\n        isDone: Boolean!\n        name: String!\n    }\n\n    input TodoInput {\n        id: String!\n        isDone: Boolean\n        name: String\n    }\n\n    input Toggle {\n        toggleStatus: Boolean!\n    }\n\n    type Mutation {\n        addTodo(input: TodoInput): [Todo]\n        updateTodo(input: TodoInput): [Todo]\n        deleteTodo(id: String!): [Todo]\n        toggleAllTodos(toggleStatus: Boolean!): [Todo]\n    }\n\n']);

var _apolloServerExpress = require('apollo-server-express');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = exports.typeDefs = (0, _apolloServerExpress.gql)(_templateObject);