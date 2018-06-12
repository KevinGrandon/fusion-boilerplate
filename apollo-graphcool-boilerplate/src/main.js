import 'isomorphic-fetch';

import React from 'react';
import App, {ApolloClientToken} from 'fusion-apollo';
import {FetchToken, SessionToken} from 'fusion-tokens';
import Session, {
  SessionSecretToken,
  SessionCookieNameToken,
} from 'fusion-plugin-jwt';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';
import ApolloClientPlugin, {
  ApolloClientEndpointToken,
} from 'fusion-apollo-universal-client';
import CsrfProtectionPlugin, {
  FetchForCsrfToken,
  CsrfIgnoreRoutesToken,
} from 'fusion-plugin-csrf-protection-react';

import {createToken} from 'fusion-core';
import unfetch from 'unfetch';

import root from './root.js';

import config from '../config/config';

export default () => {
  const app = new App(root);

  const FetchTokenForApolloClient = createToken('FetchTokenForApolloClient');
  app.register(FetchTokenForApolloClient, unfetch);

  app.register(FetchToken, CsrfProtectionPlugin);
  __NODE__ && app.register(CsrfIgnoreRoutesToken, ['/_errors']);
  __NODE__ && app.register(SessionToken, Session);
  __NODE__ && app.register(SessionSecretToken, 'some-secret');
  __NODE__ && app.register(SessionCookieNameToken, 'jwt-session');
  __BROWSER__ && app.register(FetchForCsrfToken, unfetch);
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEvents);
  app
    .register(ApolloClientToken, ApolloClientPlugin)
    .alias(FetchToken, FetchTokenForApolloClient);
  app.register(ApolloClientEndpointToken, config.endpoint);
  return app;
};
