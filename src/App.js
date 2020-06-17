import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { NavBar, Home } from './components';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'jordan'
		};
	}
	render() {
		return (
			<>
			<Switch>
				<Route exact path="/:page?" render={props => <NavBar {...props} />} />
      </Switch>
	  <Home/>
	  </>
		);
	}
}
