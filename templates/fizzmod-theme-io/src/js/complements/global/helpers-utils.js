export const RESOLUTIONS = {
	xxs: { min: 0, max: 320 },
	xs: { min: 321, max: 767 },
	sm: { min: 768, max: 991 },
	md: { min: 992, max: 1199 },
	lg: { min: 1200, max: 2048 }
};

export const EXPRESSIONS = {
	// eslint-disable-next-line no-useless-escape
	url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/,
	date: /^([0][1-9]|[12][0-9]|3[01])(\/)([0][1-9]|[1][0-2])\2(\d{4})$/,
	// eslint-disable-next-line no-useless-escape
	simpleDate: /[\d+(\/|\-)]+\d,{4}/g,
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
	onlyNum: /^[0-9]+$/,
	someNum: /[0-9]/g,
	onlyText: /^[a-zA-Z]+$/,
	onlyTextSpaces: /^[0-9a-zA-Z]/
};
