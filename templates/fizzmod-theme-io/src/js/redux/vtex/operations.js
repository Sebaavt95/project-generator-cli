import { getProfile } from 'utils/vtex';
import { initSalesChannel } from 'redux/storeSelector/utils';
import { operations, actions } from 'redux/storeSelector';
import { STORE_KEY } from 'redux/header/reducer';
import { updateOpen } from 'redux/header/operations';
import { actUpdateUser, actUpdateSc, actUpdateLoadedSc } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const checkUserLogged = () => dispatch => {
	getProfile()
		.then(res => {
			dispatch(actUpdateUser(true, res));
		})
		.catch(error => {
			dispatch(actUpdateUser(false, {}));
			if (error.message !== 'user undefined') console.error(error);
		});
};

export const initializeSaleChannel = dispatch => {
	initSalesChannel().then(({ isOK = false, store, saleChannel }) => {
		if (isOK) {
			operations.updateStore(store)(dispatch);
			dispatch(actUpdateSc(saleChannel));
			dispatch(actUpdateLoadedSc(true));
			dispatch(actions.changePending());
		} else {
			dispatch(actUpdateLoadedSc(true));
			updateOpen(STORE_KEY, true)(dispatch)();
		}
	});
};
