import React, { Component } from 'react';
import { render } from 'react-dom';
import { HelloWorld } from './components/HelloWorld'
// import HelloWorld from './components/HelloWorld'

class App extends Component {
	render() {
		return (
			<HelloWorld 
			name={'Santiago'}
			lastname={'martinez'}
			age={'45'}
			work={'IBM'}
			/>
		);
	}
}

const mount = document.getElementById('app')
render(< App />, mount)