/* eslint-disable import/prefer-default-export */
import types from './types';

export const actUpdate = (data = {}) => ({
	type: types.UPDATE,
	data
});

export const actUpdateSearchItems = (data = []) => ({
	type: types.UPDATE_SEARCH_ITEMS,
	data
});

export const actUpdateLoading = (payload = false) => ({
	type: types.UPDATE_LOADING,
	payload
});
