import React from 'react';
import {compose} from 'redux';

import App from 'fusion-react';
import ReactReduxPlugin from 'fusion-plugin-react-redux';
import reduxActionEnhancerFactory from 'fusion-redux-action-emitter-enhancer';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEventsPlugin from 'fusion-plugin-universal-events-react';

import {reactorEnhancer} from 'redux-reactors';

import getInitialState from './initialState.js';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.plugin(Styletron);
  app.plugin(Router, {});
  const UniversalEvents = app.plugin(UniversalEventsPlugin, {});
  const universalEventsEnhancer = reduxActionEnhancerFactory(UniversalEvents);
  const reducer = (state) => state;
  const enhancer = compose(reactorEnhancer, universalEventsEnhancer);
  app.plugin(ReactReduxPlugin, {reducer, enhancer, getInitialState});
  return app;
}
