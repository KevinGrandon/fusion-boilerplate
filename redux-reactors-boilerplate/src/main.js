import React from 'react';
import {compose} from 'redux';

import App from 'fusion-react';
import {FetchToken} from 'fusion-tokens';
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  GetInitialStateToken,
  PreloadedStateToken,
} from 'fusion-plugin-react-redux';
import ReduxActionEmitterEnhancer from 'fusion-plugin-redux-action-emitter-enhancer';

import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';

import {reactorEnhancer} from 'redux-reactors';

import getInitialState from './initialState.js';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEvents);
  __BROWSER__ && app.register(FetchToken, fetch);

  app.register(ReduxToken, Redux);
  app.register(EnhancerToken, ReduxActionEmitterEnhancer);
  app.enhance(EnhancerToken, () => reactorEnhancer);

  const reducer = state => state;
  app.register(ReducerToken, reducer);
  __NODE__ && app.register(GetInitialStateToken, getInitialState);
  app.register(PreloadedStateToken, {counter: 0});

  return app;
};
