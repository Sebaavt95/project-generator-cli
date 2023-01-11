import { updateItem, getItem, removeItem, removeAllItems } from './api';

/**
 * Function for increment a sku quantity
 * @param {number} index
 * @returns {function}
 */
export const handleIncrementItem = index => {
	return () =>
		updateItem({
			index,
			quantity: getItem(index).quantity + 1
		});
};

/**
 * Function for decrement a sku quantity
 * @param {number} index
 * @returns {function}
 */
export const handleDecrementItem = index => {
	return () => {
		const item = getItem(index);
		if (item.quantity === 1) return false;

		return updateItem({
			index,
			quantity: item.quantity - 1
		});
	};
};

/**
 * Function for add a sku with custom quantity
 * @param {number} index
 * @param {number} quantity
 * @returns {function}
 */
export const handleAddItem = (index, quantity = 1) => {
	const parsedQuantity = Number(quantity);

	if (!parsedQuantity || parsedQuantity < 0) return () => {};

	return () =>
		updateItem({
			index,
			quantity: parsedQuantity
		});
};

/**
 * Function for remove a sku
 * @param {number} index
 * @returns {function}
 */
export const handleRemoveItem = index => {
	return () =>
		removeItem({
			index,
			quantity: getItem(index).quantity - 1
		});
};

/**
 * Function for remove all products from 'items' array
 * @returns {function}
 */
export const handleRemoveAllItems = () => removeAllItems();
