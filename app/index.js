import React from 'react';
import ReactDOM from 'react-dom';
import store, { incrementCounter } from './store'; // imported for you already

class Counter extends React.Component {
	constructor() {
		super();
		this.state = store.getState();
		//this.increment = this.increment.bind(this);
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	increment() {
		store.dispatch(incrementCounter());
	}

	render() {
		return (
			<div id="container">
				<div id="counter">
					<h1>{this.state.count}</h1>
					<button onClick={this.increment}>Increment</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));
