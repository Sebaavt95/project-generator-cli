import { useState, useEffect } from 'react';
import {
	saveVtexCheckout,
	subscribe,
	subscribeRequestBegin,
	getOrderForm,
	unsubscribe
} from './api';
import {
	handleIncrementItem,
	handleDecrementItem,
	handleAddItem,
	handleRemoveItem,
	handleRemoveAllItems
} from './utils';

const useVtexCheckout = () => {
	const [orderFormState, setOrderFormState] = useState(null);
	const [ready, setReady] = useState(false);
	const [loading, setLoading] = useState(true);

	/**
	 * Function for update the state with a orderForm updated
	 * @param {object} orderForm
	 */
	const updateOrderForm = orderFrm => {
		setOrderFormState(orderFrm);
		setLoading(false);
	};

	const initLoading = () => setLoading(true);

	const initCheckoutFunctions = async () => {
		subscribe('orderFormUpdated.vtex', updateOrderForm);
		subscribeRequestBegin(initLoading);

		const orderFormAPI = await getOrderForm();

		setOrderFormState(orderFormAPI);
		setReady(true);
		setLoading(false);
	};

	useEffect(() => {
		const { checkout } = window.vtexjs;
		saveVtexCheckout(checkout);
		initCheckoutFunctions();
	}, []);

	useEffect(() => {
		return () => unsubscribe();
	}, []);

	if (ready)
		return {
			orderFormState,
			items: orderFormState.items,
			incrementItem: handleIncrementItem,
			decrementItem: handleDecrementItem,
			addItem: handleAddItem,
			removeAllItems: handleRemoveAllItems,
			removeItem: handleRemoveItem,
			loading
		};
};

export default useVtexCheckout;
