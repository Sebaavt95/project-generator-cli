import { changeSaleChannel } from 'utils/vtex';
import { STORE_KEY } from 'redux/header/reducer';
import { updateOpen } from 'redux/header/operations';
import actions from './actions';
import types from './types';
import { getStoreById, getStoreBySc, getVtexSC, storesManager } from './utils';

const initStates = async dispatch => {
	try {
		const storesSelectorManager = await storesManager();
		const states = storesSelectorManager.findStore({ state: '', store: '' });
		const store = await storesSelectorManager.getCurrentStore();
		const data = { states, stores: [] };
		if (states.length === 1) {
			const availableStores = storesSelectorManager.findStore({ state: states[0].name });
			data.stores = availableStores || [];
		}

		dispatch(actions.init(data, store));
	} catch (e) {
		const storesSelectorManager = await storesManager();
		const states = storesSelectorManager.findStore({ state: '', store: '' });
		const data = { states, stores: [] };
		if (states.length === 1) {
			const availableStores = storesSelectorManager.findStore({ state: states[0].name });
			data.stores = availableStores || [];
		}

		dispatch(actions.init(data));
	}
};

const searchState = state => {
	return async dispatch => {
		const storesSelectorManager = await storesManager();
		const stores = storesSelectorManager.findStore({ state });
		if (!stores.length) dispatch(actions.update('stores', []));
		dispatch(actions.update('stores', stores));
		dispatch(actions.update('cp', ''));
		dispatch(actions.update('selectedStore', true));
	};
};

const goBack = () => dispatch => {
	dispatch(actions.update('stores', []));
	dispatch(actions.update('selectedStore', false));
	dispatch(actions.changeStepState('init'));
};

const goInit = () => {
	return dispatch => {
		dispatch({ type: types.BACK_TO_INIT });
	};
};

const handleOpen = () => {
	return dispatch => {
		dispatch(actions.update('open', true));
	};
};

const handleClose = () => {
	return dispatch => {
		dispatch(actions.close());
	};
};

const updateStore = store => dispatch => dispatch(actions.update('store', store));

const changeStep = step => dispatch => dispatch(actions.changeStepState(step));

const actChangeStore = (dispatch, store, sc, changeSalesChannel = false) =>
	new Promise(async resolve => {
		const storesSelectorManager = await storesManager();
		dispatch(actions.update('store', store));
		dispatch({ type: 'vtex/UPDATE_SC', payload: sc });
		dispatch(actions.changePending());
		storesSelectorManager.setSalesChannel(sc, store.id);
		if (changeSalesChannel) changeSaleChannel(sc);
		resolve();
	});

const closeSTModal = (inmediate = false) => dispatch => {
	const time = inmediate ? 0 : 3000;
	setTimeout(() => {
		updateOpen(STORE_KEY, false)(dispatch)();
		dispatch(actions.changeStepState('init'));
		dispatch(actions.popUpStores(false));
		dispatch(actions.close());
	}, time);
};

const changeStore = ({ salesChannel, storeId = '', forceChangeStore = false }) => async (
	dispatch,
	getState
) => {
	const { pending } = getState().storeSelector;
	const storesSelectorManager = await storesManager();
	if (!salesChannel) return null;
	const store = storeId ? await getStoreById(storeId) : await getStoreBySc(salesChannel);
	const unavailableItems = await storesSelectorManager.getUnavailableItems(salesChannel);
	if (unavailableItems.length && !forceChangeStore) {
		dispatch(actions.setUnavailableData({ items: unavailableItems, sc: salesChannel }));
		return dispatch(actions.changeStepState('unavailableItems'));
	}
	const newSalesChannel = store.sc;
	const selectedSaleChannel = await getVtexSC();
	const isSalesChannelChanged = selectedSaleChannel !== newSalesChannel;
	const handleChangeStore = () => {
		if (isSalesChannelChanged || pending) {
			actChangeStore(dispatch, store, salesChannel, true);
		} else {
			actChangeStore(dispatch, store, salesChannel);
			dispatch(actions.update('saleChannel', store.sc));
			dispatch(actions.update('loadedSC', true));
			dispatch(actions.changePending());
			closeSTModal()(dispatch);
		}
	};
	dispatch(actions.changeStepState('success'));
	dispatch(actions.success());
	handleChangeStore();
};

export default {
	initStates,
	searchState,
	goBack,
	goInit,
	closeSTModal,
	handleOpen,
	handleClose,
	updateStore,
	changeStore,
	changeStep
};
