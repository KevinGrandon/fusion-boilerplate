import React from 'react';
import { compose } from 'redux';
import App from 'fusion-react';
import { FetchToken } from 'fusion-tokens';
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  GetInitialStateToken,
  PreloadedStateToken,
} from 'fusion-plugin-react-redux';
import ReduxActionEmitterEnhancer from 'fusion-plugin-redux-action-emitter-enhancer';
import UniversalEvents, { UniversalEventsToken } from 'fusion-plugin-universal-events';
import I18n, {
  I18nToken,
  I18nLoaderToken
} from 'fusion-plugin-i18n-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import fetch from 'unfetch';

import getInitialState from './initialState.js';
import Root from './components/Root';
import reducers from './reducers';
import TodoStylingPlugin from './plugins/TodoStylingPlugin';
// TODO: fix locale `process` issue
// import TodoTranslationLoader from './plugins/TodoTranslationLoader';

export default () => {
  const app = new App(Root);

  app.register(UniversalEventsToken, UniversalEvents);
  app.register(Router);

  app.register(Styletron);

  app.register(ReduxToken, Redux);
  app.register(EnhancerToken, ReduxActionEmitterEnhancer);
  __NODE__ && app.register(GetInitialStateToken, getInitialState);
  app.register(ReducerToken, reducers);

  app.register(I18nToken, I18n);
  __BROWSER__ && app.register(FetchToken, fetch);
  // TODO: fix locale `process` issue
  // __NODE__ && app.register(I18nLoaderToken, TodoTranslationLoader());

  __NODE__ && app.register(TodoStylingPlugin);

  return app;
};
