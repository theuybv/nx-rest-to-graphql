import { refocusExchange } from '@urql/exchange-refocus';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

export const graphqlClient = createClient({
  url: 'http://localhost:3333/graphql',
  exchanges: [dedupExchange, refocusExchange(), cacheExchange, fetchExchange],
});
