import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { schema } from './src/schema';
import { resolvers } from './src/resolvers';

const PORT = 4000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
