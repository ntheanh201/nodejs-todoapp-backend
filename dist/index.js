'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./src/schema');

var _resolvers = require('./src/resolvers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 4000;

var app = (0, _express2.default)();

var server = new _apolloServerExpress.ApolloServer({
    typeDefs: _schema.schema,
    resolvers: _resolvers.resolvers
});

server.applyMiddleware({ app: app });

app.listen({ port: PORT }, function () {
    return console.log('\uD83D\uDE80 Server ready at http://localhost:4000' + server.graphqlPath);
});