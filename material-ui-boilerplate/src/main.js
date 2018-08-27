// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';

import MuiThemeProvider, {
  MuiThemeProviderToken,
} from 'fusion-plugin-material-ui';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Router);
  app.register(MuiThemeProviderToken, MuiThemeProvider);
  return app;
};
