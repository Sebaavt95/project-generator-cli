/* global $ */

let vtexCheckout;
export const saveVtexCheckout = checkout => {
	if (!checkout) return;
	vtexCheckout = checkout;
};

/**
 * Convert a checkout function to a promise
 * @returns {promise}
 */
const convertToPromise = jqueryDeferred =>
	new Promise((resolve, reject) => jqueryDeferred.done(resolve).fail(reject));

/**
 * Gets the order form from the current order
 * @returns {promise}
 */
export const getOrderForm = () => {
	if (vtexCheckout.orderForm) return Promise.resolve(vtexCheckout.orderForm);

	return convertToPromise(vtexCheckout.getOrderForm());
};

/**
 * Function for return a specific sku from the element array by the position of its index
 * @param {number} index
 * @returns {object}
 */
export const getItem = index => {
	const { items = [] } = vtexCheckout.orderForm;
	if (items.length <= index && index >= 0) throw new Error('item index invalid');

	return items[index];
};

/**
 * Update a product from the order form
 * @param {object} item
 * @returns {promise}
 */
export const updateItem = item => convertToPromise(vtexCheckout.updateItems([item]));

/**
 * Remove a product from the order form
 * @param {object} item
 * @returns {promise}
 */
export const removeItem = item => convertToPromise(vtexCheckout.removeItems([item]));

/**
 * Remove all products from the order form
 * @returns {promise}
 */
export const removeAllItems = () => convertToPromise(vtexCheckout.removeAllItems());

let subscriber;

export const subscribe = (subscribeEvent, fn) => {
	subscriber = (event, orderForm) => fn(orderForm);
	$(window).on(subscribeEvent, subscriber);
};

export const unsubscribe = () => {
	if (subscriber) {
		$(window).off('orderFormUpdated.vtex', subscriber);
		subscriber = null;
	}
};

export const subscribeRequestBegin = fn => $(window).on('checkoutRequestBegin.vtex', fn);
