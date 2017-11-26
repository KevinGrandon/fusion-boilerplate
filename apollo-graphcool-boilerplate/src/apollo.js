import 'isomorphic-fetch';

import ApolloClient from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink, concat} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {unescape} from 'fusion-core';

import * as Cookies from 'js-cookie';

import config from '../config/config';

const getBrowserProps = () => {
  console.log('browser token?', Cookies.get('token'));
  return Cookies.get('token');
}

const getServerProps = (ctx) => {
  console.log('server cookies?', ctx && ctx.cookies.get('token'));
  return ctx && ctx.cookies.get('token');
}

const getClient = (...args) => {
  const httpLink = new HttpLink({
    uri: config.graphQLEndpoint,
    fetch: global.fetch || window.fetch,
  });

  const token = __BROWSER__ ? getBrowserProps() : getServerProps(...args);
  const authMiddleware = new ApolloLink((operation, forward) => {
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return forward(operation);
  });

  let initialState = null;
  if (__BROWSER__) {
    initialState = JSON.parse(
      unescape(document.getElementById('__APOLLO_STATE__').textContent)
    );
    console.log('initialState!', initialState)
  }

  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
  return client;
}

export default getClient;
