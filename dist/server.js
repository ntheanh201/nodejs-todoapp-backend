// import express from 'express'
// import { ApolloServer, gql } from 'apollo-server-express'

// const PORT = 4000;

// const app = express();

// const todos = [{
//     id: 0,
//     isDone: false,
//     name: 'theanhdz'
// }, {
//     id: 1,
//     isDone: true,
//     name: 'theanhhhhhhhhh'
// }]

// const typeDefs = gql`
//     type Todos {
//         id: String,
//         isDone: Boolean,
//         name: String
//     }

//     type Query {
//         todos: [Todos]
//     }
// `;

// const resolvers = {
//     Query: {
//         todos: () => todos
//     },
// };

// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });

// app.listen({ port: PORT }, () =>
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )
"use strict";