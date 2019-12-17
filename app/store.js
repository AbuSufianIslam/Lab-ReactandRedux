import { createStore } from 'redux';

// Still need:
//  - action type
//  - action creator
//  - initial state
//  - reducer

const initialState = {
	// what should be on our initial state?
	count: 0
};

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const incrementCounter = () => ({ type: INCREMENT_COUNTER });

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return { ...state, count: state.count + 1 };
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
