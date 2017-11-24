import React from 'react';

import { ApolloProvider } from 'react-apollo';

import {Router, Route, Switch} from 'fusion-plugin-react-router';

import client from './apollo';

import Header from './components/header.js';
import Home from './pages/home.js';
import PageNotFound from './pages/pageNotFound.js';
import Todos from './pages/todos.js';

const root = (
  <ApolloProvider client={client}>
    <div>
    	<Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </ApolloProvider>
);
export default root;
