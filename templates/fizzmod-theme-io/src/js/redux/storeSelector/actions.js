import types from './types';

const update = (attr, payload) => ({
	type: types.UPDATE,
	attr,
	payload
});

const init = (data, store) => ({
	type: types.INIT,
	states: data.states,
	stores: data.stores,
	store
});
const close = () => ({ type: types.CLOSE });

const changePending = () => ({ type: types.CHANGE_PENDING });

const popUpStores = (open, state = 'init') => ({
	type: types.OPENCLOSE,
	state
});

const changeStepState = step => ({
	type: types.CHANGE_STEP,
	step
});

const setUnavailableData = data => ({
	type: types.SET_UNAVAILABLEDATA,
	payload: data
});

const success = () => changeStepState('success');
const showError = ({ id, cp, availableStores }) => {
	const response = {
		type: types.SHOW_ERROR,
		loading: typeof availableStores === 'undefined'
	};

	if (id) response.errorData = { id, cp };

	if (availableStores && availableStores.length) response.stores = availableStores;

	return response;
};

export default {
	update,
	init,
	close,
	changePending,
	popUpStores,
	changeStepState,
	success,
	setUnavailableData,
	showError
};
