import 'isomorphic-fetch';

import ApolloClient from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink, concat} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';

import config from '../config/config';
const httpLink = new HttpLink({
  uri: config.graphQLEndpoint,
  fetch: global.fetch || window.fetch,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token =
    (typeof localStorage !== 'undefined' && localStorage.getItem('token')) ||
    null;
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache().restore(__BROWSER__ && window.__APOLLO_STATE__),
});

export default client;
