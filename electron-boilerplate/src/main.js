import React from 'react';
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Router);
  return app;
};
