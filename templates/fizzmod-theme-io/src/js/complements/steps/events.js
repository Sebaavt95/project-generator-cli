import { checkoutGlobals } from '../global';

export const stepEvents = {
	initialize: 'fizz-custom-change',
	steps: 'fizz-step-change'
};

const { Utils } = checkoutGlobals;

export const captureEvents = () => {
	const body = document.querySelector('body');
	const className = 'eventInProgress';
	if (body.classList.contains(className)) return false;
	body.classList.add(className);
	return setTimeout(() => {
		body.classList.remove(className);
		Utils.customTrigger({ name: stepEvents.initialize });
	}, 300);
};
