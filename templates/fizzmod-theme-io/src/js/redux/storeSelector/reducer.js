import types from './types';

const initialState = {
	open: false,
	step: 'init',
	states: [],
	cp: '',
	invalidCP: false,
	selectedStore: false,
	stores: [],
	pending: true,
	availableStores: undefined,
	unavailableData: {},
	errorData: {},
	store: undefined
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE: {
			return {
				...state,
				[action.attr]: action.payload
			};
		}
		case types.INIT: {
			return {
				...state,
				states: action.states,
				stores: action.stores,
				store: action.store
			};
		}
		case types.OPENCLOSE: {
			return {
				...state,
				open: action.payload,
				step: action.state
			};
		}
		case types.CLOSE: {
			return {
				...state,
				open: false,
				cp: '',
				invalidCP: false,
				selectedStore: false
			};
		}
		case types.CHANGE_PENDING: {
			return {
				...state,
				pending: false
			};
		}
		case types.CHANGE_STEP: {
			return {
				...state,
				step: action.step
			};
		}

		case types.SET_UNAVAILABLEDATA: {
			return {
				...state,
				unavailableData: action.payload
			};
		}

		case types.SHOW_ERROR: {
			return {
				...state,
				step: 'error',
				loading: action.loading,
				availableStores: action.stores || [],
				errorData: action.errorData || {}
			};
		}
		case types.BACK_TO_INIT: {
			return {
				...state,
				step: 'init',
				cp: '',
				invalidCP: false,
				selectedStore: false,
				availableStores: [],
				errorData: {},
				stores: []
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
