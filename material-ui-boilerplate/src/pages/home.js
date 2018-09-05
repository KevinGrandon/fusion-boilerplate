// @flow
import React from 'react';

import Button from '@material-ui/core/Button';
import TopBar from './topbar';

const Home = () => (
  <div>
    <TopBar />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default Home;
