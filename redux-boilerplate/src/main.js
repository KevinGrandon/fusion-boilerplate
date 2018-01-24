import React from 'react';
import {combineReducers, compose} from 'redux';

import App from 'fusion-react';
import {FetchToken} from 'fusion-tokens';
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  InitialStateToken,
  PreloadedStateToken,
} from 'fusion-plugin-react-redux';
import ReduxActionEmitterEnhancer from 'fusion-plugin-redux-action-emitter-enhancer';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';

import getInitialState from './initialState.js';

import root from './root.js';
import counter from './reducers/counter';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEvents);

  app.register(ReduxToken, Redux);
  app.register(EnhancerToken, ReduxActionEmitterEnhancer);
  __BROWSER__ && app.register(FetchToken, fetch);
  app.register(InitialStateToken, getInitialState);
  app.register(PreloadedStateToken, {counter: 0});

  const reducer = combineReducers({
    counter,
  });
  app.register(ReducerToken, reducer);
  return app;
};
