import React from 'react';

import { ApolloProvider } from 'react-apollo';

import {Router, Route, Switch} from 'fusion-plugin-react-router';

import App from './components/App'
import CreatePost from './components/CreatePost'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'

const root = ({client} = {}) => {
  return <ApolloProvider client={client}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/create' component={CreatePost} />
      <Route path='/login' component={LoginUser} />
      <Route path='/signup' component={CreateUser} />
    </Switch>
  </ApolloProvider>
};
export default root;
