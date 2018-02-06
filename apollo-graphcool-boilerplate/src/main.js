import 'isomorphic-fetch';

import React from 'react';
import App from 'fusion-apollo';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';
import apolloClientFactory from 'fusion-apollo-universal-client';

import root from './root.js';

import config from '../config/config';
config.fetch = global.fetch || window.fetch;

export default () => {
  const app = new App(root, apolloClientFactory(config));
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEvents);
  return app;
};
