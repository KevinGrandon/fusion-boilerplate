import React from 'react';
import { Router, Route, Switch } from 'fusion-plugin-react-router';

import Header from '../containers/Header';
import Content from '../containers/Content';
import LanguagePicker from './LanguagePicker';

const root = (
  <div>
    <section className="todoapp">
      <Header />
      <Switch>
        <Route path="/" component={Content} />
      </Switch>
    </section>
    <LanguagePicker />
  </div>
);

export default root;
