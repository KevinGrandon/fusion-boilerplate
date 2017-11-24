import React, { Component } from 'react';

import {Router, Route, Link, Switch, NotFound} from 'fusion-plugin-react-router';

export default class Header extends Component {
	render() {
    return (
      <header>
  		  <h1>Fusion App</h1>
  	    <ul>
  	      <li><Link to="/">Home</Link></li>
  	      <li><Link to="/todos">TODOs</Link></li>
  	      <li><Link to="/404">404</Link></li>
  	    </ul>
      </header>
    );
	}
}
