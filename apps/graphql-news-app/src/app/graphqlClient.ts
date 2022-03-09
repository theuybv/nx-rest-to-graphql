import { refocusExchange } from '@urql/exchange-refocus';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

export const graphqlClient = createClient({
  url: 'graphql',
  exchanges: [dedupExchange, refocusExchange(), cacheExchange, fetchExchange],
});
