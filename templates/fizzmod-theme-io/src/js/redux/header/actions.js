import types from './types';

// eslint-disable-next-line import/prefer-default-export
export const actUpdateOpen = (element, payload) => ({
	type: types.UPDATE_OPEN,
	element,
	payload
});
