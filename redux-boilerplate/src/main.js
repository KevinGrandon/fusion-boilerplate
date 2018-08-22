import React from 'react';
import {combineReducers, compose} from 'redux';

import App from 'fusion-react';
import {createPlugin} from 'fusion-core';
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
  __NODE__ && app.register(GetInitialStateToken, getInitialState);
  app.register(PreloadedStateToken, {counter: 0});

  app.register(
    createPlugin({
      middleware() {
        return (ctx, next) => {
          console.log('got middleware for path', ctx.path);
          if (ctx.path === '/api/user/1') {
            console.log('API SHOWING BEING HIT IN REQUEST');
            ctx.body = {name: 'Bob'};
          }
          return next();
        };
      },
    })
  );

  const reducer = combineReducers({
    counter,
  });
  app.register(ReducerToken, reducer);
  return app;
};
