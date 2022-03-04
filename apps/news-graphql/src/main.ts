import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { QueryResolvers } from './app/resolvers';

(async () => {
  const app = express();

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to news-graphql!' });
  });

  const schema = await buildSchema({
    resolvers: [QueryResolvers],
    // dateScalarMode: 'isoDate', // "timestamp" or "isoDate"
    // add this
  });

  const port = process.env.port || 3333;

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
})();
