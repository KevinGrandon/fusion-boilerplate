import 'isomorphic-fetch';

import React from 'react';
import App, {ApolloClientToken} from 'fusion-apollo';
import {FetchToken} from 'fusion-tokens';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';

import ApolloClientPlugin, {
  ApolloClientEndpointToken,
} from 'fusion-apollo-universal-client';
import unfetch from 'unfetch';

import root from './root.js';

import config from '../config/config';

export default () => {
  const app = new App(root);
  __BROWSER__ && app.register(FetchToken, window.fetch);
  __NODE__ && app.register(FetchToken, unfetch);
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEvents);
  app.register(ApolloClientToken, ApolloClientPlugin);
  app.register(ApolloClientEndpointToken, config.endpoint);
  return app;
};
