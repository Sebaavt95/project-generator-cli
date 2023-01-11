import types from './types';

const initialState = {
	substitutes: null,
	substitutesOptions: null,
	orderInfo: null,
	orderSubstitutes: {
		substituteValue: {}
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SUBSTITUTES:
			return {
				...state,
				substitutes: action.payload
			};
		case types.SET_SUBSTITUTES_OPTIONS:
			return {
				...state,
				substitutesOptions: action.payload
			};
		case types.UPDATE_ORDER_INFO:
			return {
				...state,
				orderInfo: action.payload
			};
		case types.SET_ORDER_SUBSTITUTE_VALUE:
			return {
				...state,
				orderSubstitutes: {
					...state.orderSubstitutes,
					substituteValue: action.payload
				}
			};
		default:
			return state;
	}
};

export default reducer;
