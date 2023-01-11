import search from 'modules/search';
import {
	addToCart as addToCartFn,
	changeQuantity,
	cleanCart,
	deleteItem
} from '@fizzmod/vtex-utils';
import { getOrderForm, getCurrentSalesChannel } from 'utils/vtex';
import { actUpdate, actUpdateSearchItems, actUpdateLoading } from './actions';
import { observer, orderItems } from './utils';

const salesChannel = getCurrentSalesChannel();

/**
 * @name searchItems
 * @description call search api to get complete orderForm items products data
 * @private
 * @param {object} orderForm - current orderForm
 * @return {array} with complete items data
 */
const searchItems = dispatch => async (orderForm = {}) => {
	try {
		const { items = [] } = orderForm;

		const skusToSearch = items.map(item => item.id);

		const searchSkus = await search.skus(skusToSearch);

		const orderedItems = orderItems(items, searchSkus);

		dispatch(actUpdateSearchItems(orderedItems));

		return orderedItems;
	} catch (reason) {
		return reason;
	}
};

/**
 * @name initOrderForm
 * @description - initialize order form state module
 * @public
 * @returns {object} - current orderForm data
 * @example initOrderForm(dispatch);
 */
export const initOrderForm = async dispatch => {
	dispatch(actUpdateLoading(true));

	try {
		const data = (await getOrderForm()) || {};

		dispatch(actUpdate(data));
		searchItems(dispatch)(data);

		observer().subscribe(updatedData => {
			dispatch(actUpdate(updatedData));
			searchItems(dispatch)(updatedData);
		});

		dispatch(actUpdateLoading(false));

		return data;
	} catch (reason) {
		dispatch(actUpdateLoading(false));

		// eslint-disable-next-line no-console
		console.warn('Error with orderForm initialization:', reason);

		return reason;
	}
};

/**
 * @name getCurrentQuantity
 * @description - get current quantity in orderForm
 * @public
 * @param {string|number} skuId - id of sku to get quantity
 * @returns {number} - current quantity
 * @example getCurrentQuantity(dispatch, getState)(42)
 */
export const getCurrentQuantity = (dispatch, getState) => skuId => {
	if (!skuId) return 0;

	const {
		orderForm: { data = {} }
	} = getState();

	const { items = [] } = data;

	const itemAddedBefore = items.find(item => item.id.toString() === skuId.toString());

	return itemAddedBefore ? itemAddedBefore.quantity : 0;
};

/**
 * @name addItems
 * @description - add one or many skus to cart
 * @public
 * @param {array} skus - array of skus with id, seller and quantity
 * @param {function} callback - callback function when blocked is true, or api call is finished
 * @param {boolean} blocked - if blocked is true, exec callback and return
 * @returns {promise} - promise with new orderForm response
 * @example addItems(dispatch, getState)([{ id: 42, quantity: 2, seller: 1}]).then(console.log);
 */
export const addItems = (dispatch, getState) => async (skus = []) => {
	dispatch(actUpdateLoading(true));

	try {
		const {
			orderForm: { data: oldOrderForm }
		} = getState();

		const newOrderForm = await addToCartFn(skus, salesChannel);

		dispatch(actUpdateLoading(false));

		return {
			oldOrderForm,
			newOrderForm
		};
	} catch (reason) {
		dispatch(actUpdateLoading(false));

		return reason;
	}
};

/**
 * @name updateItem
 * @description - update a particular sku
 * @public
 * @param {number|string} skuId - sku id to update
 * @param {number} quantity - new quantity to update
 * @returns {promise} - promise with new orderForm response
 * @example updateItem(dispatch, getState)(42, 2).then(console.log);
 */
export const updateItem = (dispatch, getState) => async (skuId, quantity) => {
	dispatch(actUpdateLoading(true));

	try {
		const {
			orderForm: { data: oldOrderForm }
		} = getState();

		const newOrderForm = await changeQuantity(skuId, quantity);

		dispatch(actUpdateLoading(false));

		return {
			oldOrderForm,
			newOrderForm
		};
	} catch (reason) {
		dispatch(actUpdateLoading(false));

		return reason;
	}
};

/**
 * @name handleQuantity
 * @description - add or remove a specific sku from its current quantity
 * @public
 * @param {number|string} skuId - sku id to update
 * @param {string} action - add or remove from actual quantity
 * @param {number} quantity - quantity to change
 * @example handleQuantity(dispatch, getState)(42, 'add', 2).then(console.log);
 */
export const handleQuantity = (dispatch, getState) => async (
	skuId,
	action = 'add',
	quantity = 1
) => {
	try {
		const currentQuantity = getCurrentQuantity(dispatch, getState)(skuId);

		const quantityActions = {
			add: currentQuantity + quantity,
			remove: currentQuantity - quantity
		};

		const newQuantity = quantityActions[action];

		const res = await updateItem(dispatch, getState)(skuId, newQuantity);

		return res;
	} catch (reason) {
		return reason;
	}
};

/**
 * @name removeItem
 * @description - remove an item from orderForm
 * @public
 * @returns {promise} - promise with new and old orderForm response
 * @example removeItem(dispatch, getState)(42).then(console.log);
 */
export const removeItem = (dispatch, getState) => async skuId => {
	dispatch(actUpdateLoading(true));

	try {
		const {
			orderForm: { data: oldOrderForm }
		} = getState();

		const newOrderForm = await deleteItem(skuId);

		dispatch(actUpdateLoading(false));

		return {
			oldOrderForm,
			newOrderForm
		};
	} catch (reason) {
		dispatch(actUpdateLoading(false));

		return reason;
	}
};

/**
 * @name removeAllItems
 * @description - remove all items from orderForm
 * @public
 * @returns {promise} - promise with new and old orderForm response
 * @example removeAllItems(dispatch, getState)().then(console.log);
 */
export const removeAllItems = (dispatch, getState) => async () => {
	dispatch(actUpdateLoading(true));

	try {
		const {
			orderForm: { data: oldOrderForm }
		} = getState();

		const newOrderForm = await cleanCart();

		dispatch(actUpdateLoading(false));

		return {
			oldOrderForm,
			newOrderForm
		};
	} catch (reason) {
		dispatch(actUpdateLoading(false));

		return reason;
	}
};
