import React from 'react';

import {Link, Router, Route, Switch} from 'fusion-plugin-react-router';

import Home from './pages/home.js';
import Page2 from './pages/page2.js';

const root = (
  <div>
    <h1>Welcome to Fusion.js</h1>
    <p>
      <Link to="/">Home</Link> | <Link to="/page2">Page 2</Link>
    </p>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page2" component={Page2} />
    </Switch>
  </div>
);
export default root;
