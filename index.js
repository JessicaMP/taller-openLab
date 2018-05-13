import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	render() {
		return (<h1>Hola cornitas</h1>)
	}
}

const mount = document.getElementById('app')
render(< App/>, mount)