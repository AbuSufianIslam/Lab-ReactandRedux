import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { incrementCounter } from './store'; // imported for you already

const Counter = (props) => {
	console.log('rendering counter', props);
	const { count, increment } = props;

	return (
		<div id="container">
			<div id="counter">
				<h1>{count}</h1>
				<button onClick={increment}>Increment</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log('map state to props', state);
	return {
		count: state.count
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log('map Dispatch To Props');
	return {
		increment: () => dispatch(incrementCounter())
	};
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedCounter />
	</Provider>,
	document.getElementById('app')
);
