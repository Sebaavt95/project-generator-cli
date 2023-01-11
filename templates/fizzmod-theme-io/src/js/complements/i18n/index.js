import { messagesLangs, options } from './messages/config';

const setNewValues = localeLang => {
	try {
		const reference = messagesLangs[localeLang];
		const vtexReference = vtex.i18n[localeLang];
		const search = (a, b = vtexReference) => {
			const keys = Object.keys(a);
			keys.forEach(key => {
				if (b[key] && typeof b[key] === 'string') return Object.assign(b, { [key]: a[key] });
				if (b[key] && typeof b[key] === 'object') return search(a[key], b[key]);
			});
		};
		if (reference) search(reference);
	} catch (reason) {
		console.error('Error, set new values', reason);
	}
};

export const initializei18n = () => {
	const { forceLang } = options;

	if (forceLang !== false) {
		setNewValues(forceLang);
		vtex.i18n.setLocale(forceLang);
	} else {
		const localeLang = vtex.i18n.getLocale();
		setNewValues(localeLang);
		vtex.i18n.setLocale(localeLang);
	}
};
