import React from 'react';
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.plugin(Styletron);
  app.plugin(Router, {});
  return app;
}
