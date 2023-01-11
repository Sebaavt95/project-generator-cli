/* global $ */
import { validateArr } from 'utils';

/**
 * @name observer
 * @description module for observe order form changes
 * @public
 * @returns {object} with subscribe and unsubscribe functions
 */
export const observer = () => {
	const EVENT_NAME = 'orderFormUpdated.vtex';

	let subscribedFn = null;

	return {
		subscribe: fn => {
			subscribedFn = (evt, orderForm) => fn(orderForm);
			$(window).on(EVENT_NAME, subscribedFn);
		},
		unsubscribe: () => {
			if (subscribedFn) {
				$(window).off(EVENT_NAME, subscribedFn);
				subscribedFn = null;
			}
		}
	};
};

/**
 * @name orderItems
 * @description order the search items from orderForm items reference
 * @param {array} referenceItems array with orderForm items
 * @param {array} disorderedItems array with search result items
 * @returns {array} with ordered items
 */
export const orderItems = (referenceItems = [], disorderedItems = []) => {
	if (!validateArr(referenceItems) || !validateArr(disorderedItems)) return [];

	return referenceItems
		.map(referenceItem => {
			const { id } = referenceItem;

			const orderedItems =
				disorderedItems.find(disorderedItem => {
					return disorderedItem.items.some(item => item.itemId === id);
				}) || null;

			return orderedItems;
		})
		.filter(Boolean);
};
