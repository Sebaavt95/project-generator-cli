import types from './types';

const initialState = {
	loading: false,
	data: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE:
			return {
				...state,
				data: action.data
			};
		case types.UPDATE_SEARCH_ITEMS:
			return {
				...state,
				data: {
					...state.data,
					searchItems: [...action.data]
				}
			};
		case types.UPDATE_LOADING:
			return {
				...state,
				loading: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
