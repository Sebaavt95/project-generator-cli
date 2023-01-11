export const debounce = (fn, timeout) => {
	let timer;
	return (...params) => {
		clearTimeout(timer);
		timer = setTimeout(fn, timeout, ...params);
	};
};

export const scrollToTop = (scrollDuration = 2000) => {
	const scrollHeight = window.scrollY;
	const scrollStep = Math.PI / (scrollDuration / 15);
	const cosParameter = scrollHeight / 2;
	let scrollCount = 0;
	let scrollMargin;
	const scrollInterval = setInterval(() => {
		if (window.scrollY > 0) {
			scrollCount += 1;
			scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
			return window.scrollTo(0, scrollHeight - scrollMargin);
		}

		clearInterval(scrollInterval);
	}, 15);
};

export const unique = array =>
	array.filter((actual, i, self) => actual && self.indexOf(actual) === i);

export const settle = (promises, rejectVal = null) =>
	Promise.all(promises.map(p => Promise.resolve(p).then(null, () => rejectVal)));

/**
 * queryString
 * @memberof module:util
 * @param   {String} key
 * @return  {String}
 */
export const queryString = (key, url = window.location.search) => {
	// eslint-disable-next-line no-useless-escape
	const svalue = url.match(new RegExp(`[\?\&]${key}=([^\&]*)(\&?)`, 'i'));
	return svalue ? svalue[1] : svalue;
};

/**
 * querablePromise
 * Add states to the promise
 * @memberof module:utils
 * @param   {Promise}
 * @return  {Promise}
 */
export const querablePromise = promise => {
	// Don't modify any promise that has been already modified.
	if (promise.isResolved) return promise;

	// Set initial state
	let isPending = true;
	let isRejected = false;
	let isFulfilled = false;

	// Observe the promise, saving the fulfillment in a closure scope.
	const result = promise.then(
		v => {
			isFulfilled = true;
			isPending = false;
			return v;
		},
		e => {
			isRejected = true;
			isPending = false;
			throw e;
		}
	);

	result.isFulfilled = () => isFulfilled;
	result.isPending = () => isPending;
	result.isRejected = () => isRejected;
	return result;
};

/**
 * split text if it is greater than the character limit with elipsis.
 * @memberof module:Utils
 * @param {string} str - The string to sanitize
 * @param {number} [limit= 50] - The string to replace white spaces with, default "-"
 * @returns {string} The modified string
 * @example splitText('str', 2); // st...
 */
export const splitText = (str, limit = 50) => {
	try {
		if (!str) throw new ReferenceError('missing param');
		return str.length > limit ? `${str.slice(0, limit)}...` : str;
	} catch (reason) {
		return '';
	}
};

export const addAnimation = (name, callback) => {
	const animationCallbacks = {};
	if (!Object.keys(animationCallbacks).length) {
		document.addEventListener('animationstart', e => {
			if (e.animationName in animationCallbacks) {
				for (
					let i = 0, animationLength = animationCallbacks[e.animationName].length;
					i < animationLength;
					i++
				) {
					animationCallbacks[e.animationName][i].call(null, e);
				}
			}
		});

		document.addEventListener('webkitAnimationStart', e => {
			if (e.animationName in animationCallbacks) {
				for (
					let i = 0, animationLength = animationCallbacks[e.animationName].length;
					i < animationLength;
					i++
				) {
					animationCallbacks[e.animationName][i].call(null, e);
				}
			}
		});

		document.addEventListener('MSAnimationStart', e => {
			if (e.animationName in animationCallbacks) {
				for (
					let i = 0, animationLength = animationCallbacks[e.animationName].length;
					i < animationLength;
					i++
				) {
					animationCallbacks[e.animationName][i].call(null, e);
				}
			}
		});

		document.addEventListener('oAnimationStart', e => {
			if (e.animationName in animationCallbacks) {
				for (
					let i = 0, animationLength = animationCallbacks[e.animationName].length;
					i < animationLength;
					i++
				) {
					animationCallbacks[e.animationName][i].call(null, e);
				}
			}
		});

		document.addEventListener('mozAnimationStart', e => {
			if (e.animationName in animationCallbacks) {
				for (
					let i = 0, animationLength = animationCallbacks[e.animationName].length;
					i < animationLength;
					i++
				) {
					animationCallbacks[e.animationName][i].call(null, e);
				}
			}
		});
	}
	if (!(animationCallbacks[name] instanceof Array)) animationCallbacks[name] = [];
	animationCallbacks[name].push(callback);
};

/**
 * @name validateObj
 * @param {object} obj
 * @description returns if arg is a valid object
 * @example validateObj('test') // false
 */
export const validateObj = (obj = {}) =>
	!!(obj && obj.constructor === Object && Object.keys(obj).length);

/**
 * @name validateArr
 * @description return if arg is a valid array
 * @param {array} arr
 * @example validateArr({}) // false
 */
export const validateArr = (arr = []) => !!(arr instanceof Array && arr.length);

/**
 * Use it when you pass a prop (type boolean) to a component for styling purposes,
 * this prevents the styled-components html atribute warnings
 * @name booleanToNumber
 * @description converts boolean to a number
 * @param {boolean} boolean
 * @example booleanToNumber(false) // 0
 */
export const booleanToNumber = boolean => Number(boolean);

export const validateNumber = num => !!((num || num === 0) && !Number.isNaN(Number(num)));

/**
 * @name isRequired
 * @private
 * @description return message error on arg required
 * @param {string} location arg
 * @param {string} param arg
 * @example (param = isRequired('param')) => {}
 * @returns 'param is required'
 */
export const isRequired = (location = '', param = 'param') => {
	throw new Error(`${location}: ${param} is required`);
};

/**
 * @name invalidType
 * @private
 * @description return message error on arg required
 * @param {string} location arg
 * @param {string} param arg
 * @param {string} type type of arguments
 * @example validType('storename', 'string')
 * @returns 'param must by a valid string'
 */
export const invalidType = (location = '', param = 'param', type = isRequired('type')) => {
	throw new Error(`${location}: ${param} must be a valid ${type}`);
};

/**
 * @name validateString
 * @private
 * @description return if arg is a valid string
 * @param {string} string
 * @example validateString('') // false
 * @example validateString('fizzmod') // true
 */
export const validateString = (str = '') => !!(typeof str === 'string' && str);

/**
 * @name removeSpaces
 * @param {string} str string to remove spaces
 * @returns {string} string without spaces
 * @example removeSpaces('some string') // 'somestring'
 */
export const removeSpaces = (str = '') => {
	if (!validateString(str)) return '';

	return str.replace(/\s/g, '');
};

export const getCurrentCheckoutStep = (location = window.location) => {
	if (!validateObj(location)) return null;

	const validSteps = ['cart', 'email', 'profile', 'shipping', 'payment'];
	const { hash = '' } = location;
	const step = hash.replace(/#|\//gi, '').toLowerCase();

	return validSteps.find(s => s === step) || null;
};
