import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';
import {Router, Route, Switch, NotFound} from 'fusion-plugin-react-router';

import Header from './components/header.js';

const Home = () => <div>Hello</div>;
const Panel = styled('div', {background: 'silver'});
const Styles = () => <Panel>Styled component</Panel>;
const PageNotFound = () => <NotFound><div>404</div></NotFound>;

const root = (
  <div>
  	<Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/styles" component={Styles} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);
export default root;
