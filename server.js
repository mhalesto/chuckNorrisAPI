import typeDefs from './src/typeDefs/index.js';
import resolvers from './src/resolvers/index.js';
import { ApolloServer, gql } from 'apollo-server';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});