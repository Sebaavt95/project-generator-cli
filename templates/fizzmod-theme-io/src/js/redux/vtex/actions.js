import types from './types';

export const actUpdateUser = (isLogged, data) => {
	return {
		type: types.UPDATE_USER,
		payload: {
			isLogged,
			data
		}
	};
};

export const actUpdateLoadedSc = (isLoadedSc = true) => {
	return {
		type: types.UPDATE_LOADED_SC,
		payload: {
			isLoadedSc
		}
	};
};

export const actUpdateSc = (saleChannel = 1) => {
	return {
		type: types.UPDATE_SC,
		payload: {
			saleChannel
		}
	};
};
