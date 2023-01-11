import { getOrderForm } from 'utils/vtex';
import storesData from 'modules/storesData';
import storeSelector from '@fizzmod/store-selector';
import { getCookie } from '@fizzmod/utils';
import { validateArr, validateObj } from 'utils';

/**
 * @name storesManagerInstance
 * @description - Local instance of storesManager
 * @returns {object} - Object with storeSelectors package's methods.
 */
let storesManagerInstance = null;

/**
 * @name storesManager
 * @description - Function that instantiates storeSelector package
 * @returns {promise}
 */
export const storesManager = async () => {
	try {
		if (storesManagerInstance) return storesManagerInstance;
		storesManagerInstance = storeSelector(await storesData());
		return storesManagerInstance;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.warn('storesManager error', error);
		return {};
	}
};

const json = async () => storesData();
const config = {
	store: 'storeSelectorId',
	vtexsc: 'VTEXSC',
	cookiesExpDays: 30
};

export async function getStoreBySc(sc) {
	const resJson = await json();
	return resJson.stores.find(x => parseInt(x.sc, 10) === parseInt(sc, 10));
}

export async function getStoreById(storeId) {
	const resJson = await json();
	return resJson.stores.find(x => parseInt(x.id, 10) === parseInt(storeId, 10));
}

export const getVtexSC = async () => {
	const isCheckout = /checkout/.test(window.location.href);
	if (isCheckout) {
		getOrderForm().then(orderForm => {
			const vtexscOrderform = orderForm.salesChannel;
			return parseInt(vtexscOrderform, 10);
		});
	} else {
		const vtexscCookie = (getCookie(config.vtexsc) || '').replace('sc=', '');
		return parseInt(vtexscCookie, 10);
	}
};

export const initSalesChannel = async () => {
	const storesSelectorManager = await storesManager();
	const currentStore = await storesSelectorManager.getCurrentStore();

	if (!validateObj(currentStore)) return { isOK: false, message: 'Store not selected' };

	if (validateObj(currentStore)) {
		const { salesChannel: orderFormSalesChannel } = await getOrderForm();

		const orderFormOk =
			parseInt(orderFormSalesChannel, 10) !== currentStore.sc
				? await storesSelectorManager.setSalesChannel(currentStore.sc, currentStore.id)
				: true;

		if (orderFormOk) return { isOK: true, store: currentStore, salesChannel: currentStore.sc };
	}
};

export const hasStreetNumber = data => {
	if (!validateArr(data)) return false;
	const [res = {}] = data;
	if (!validateObj(res)) return false;
	const { address_components: addressComponent = [] } = res;
	if (!validateArr(addressComponent)) return false;
	const streetNumber = addressComponent.filter(item => item.types.includes('street_number'));
	if (!streetNumber.length) return false;
	return true;
};
