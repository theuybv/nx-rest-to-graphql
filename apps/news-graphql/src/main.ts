import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { QueryResolvers } from './app/resolvers';

import { join } from 'path';

const CLIENT_BUILD_PATH = join(__dirname, '../graphql-news-app');
const port = process.env.PORT || 3333;


(async () => {

  const app = express();
  app.use(express.static(CLIENT_BUILD_PATH));

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to news-graphql!' });
  });

  const schema = await buildSchema({
    resolvers: [QueryResolvers]
    // dateScalarMode: 'isoDate', // "timestamp" or "isoDate"
    // add this
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  app.get('*', (request, response) => {
    response.sendFile(join(CLIENT_BUILD_PATH, 'index.html'));
  });


  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
})();
