import types from './types';

const initialState = {
	orderForm: null,
	saleChannel: 1,
	userLoading: true,
	isLogged: false,
	loadedSC: false,
	logData: {}
};

const vtex = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_USER:
			return {
				...state,
				loading: false,
				isLogged: action.payload.isLogged,
				logData: action.payload.data
			};
		case types.UPDATE_LOADED_SC:
			return {
				...state,
				loadedSC: action.payload.isLoadedSc
			};
		case types.UPDATE_SC:
			return {
				...state,
				saleChannel: action.payload.saleChannel
			};
		default:
			return state;
	}
};

export default vtex;
