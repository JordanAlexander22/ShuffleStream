import React from 'react';

import { NavBar } from './components';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'jordan'
		};
	}
	render() {
		return (
			<div>
				<NavBar />
        <span><h5>welcome {this.state.name}</h5></span>
			</div>
		);
	}
}
