import { stepEvents } from './events';
import { validateProfile } from './profile';
import { router } from './router';
import { validateShipping } from './shipping';
import { checkoutGlobals } from '../global';

const { Checkout, Utils } = checkoutGlobals;

export const state = {
	current: 'cart',
	profile: null,
	payment: null,
	shipping: null
};

export const getLocation = () => {
	return window.location.hash.replace(/#|\//gi, '').toLowerCase();
};

export const initValidate = orderForm => {
	const body = document.querySelector('body');
	const current = getLocation();
	const profile = validateProfile();
	const shipping = validateShipping(orderForm);
	const payment = null;
	const currentState = Object.assign(state, {
		current,
		profile,
		shipping,
		payment
	});

	Object.keys(currentState).forEach(key => {
		const value = currentState[key];
		body.dataset[key] = value;
		state[key] = value;
	});
	router(state.current);
	Utils.customTrigger({ name: stepEvents }, { state: currentState });
	window.state = currentState;
};

export const stepInitialize = () => {
	Checkout.orderFormReady()
		.then(initValidate)
		.catch(console.error);
};

export const setViewport = () => {
	const debounce = Utils.debounce(() => {
		const body = document.querySelector('body');
		body.dataset.resolution = Utils.getResolutionKey();
	}, 150);
	return debounce();
};
