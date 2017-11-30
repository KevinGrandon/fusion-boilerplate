import React from 'react';
import App, {ApolloSSR} from 'fusion-apollo';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';

import getClient from './apollo';
import root from './root.js';

export default () => {
  const app = new App(root, getClient);
  app.plugin(Styletron);
  app.plugin(Router, {});
  return app;
}
