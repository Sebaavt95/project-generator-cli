/* global $ */

import { RESOLUTIONS } from './helpers-utils';

/**
 * @description Funciones utilizadas internamente por `Fizzmod` para usos multiples.
 * @author Pablo E. Guzmán <pablo.guzman@fizzmod.com>
 * @version 1.0.0
 * @Utils
 *
 */

const customTrigger = (config, ...params) => {
	const options = {
		name: null,
		target: window
	};

	try {
		const keys = Object.keys(config);
		if (!keys.length) throw ReferenceError('No se configuraron opciones');

		const currentKeys = Object.keys(options);
		keys.forEach(key => {
			if (!currentKeys.some(option => option === key))
				throw RangeError(`La opcion ${key} no es valida`);
			options[key] = config[key];
		});

		const customEvent = new CustomEvent(options.name, { detail: [...params] });
		options.target.dispatchEvent(customEvent);
	} catch (reason) {
		console.error(reason);
	}
};

/**
 * Evita la ejecucion consecutiva de una misma funcion.
 * @param  {Function} fn Funcion a ejecutar una vez aplicado el setTimeout
 * @param  {Number}   timeout Tiempo que se le aplica al timeOut
 * @return {Function} Funcion con debounce aplicado.
 * @memberof Core.Utils
 * @example
 * window.addEventListener('orderFormUpdate.vtex', () =>  {
 *   const debounced = Core.Utils.debounce(() => console.warn('debounce aplicado'), 1000);
 *   debounced();
 * });
 */

const debounce = (fn, timeout) => {
	let timer;
	return (...params) => {
		clearTimeout(timer);
		timer = setTimeout(fn, timeout, ...params);
	};
};

const waitForThisEventEnd = (eventName, callback, context = window) => {
	try {
		if (!eventName || typeof eventName !== 'string')
			throw new ReferenceError('No enviaste un nombre de evento válido');

		if (!callback)
			throw new ReferenceError('No existen callback a reproducir una vez capturado el evento');

		if (typeof callback !== 'function')
			throw new ReferenceError('El callback debe ser siempre una funcion');

		let dispatch = () => {
			const wait = debounce(() => {
				dispatch = () => {};
				return callback();
			}, 150);
			return wait();
		};

		return $(context).on(eventName, dispatch);
	} catch (reason) {
		return false;
	}
};

/**
 * @description  Retorna la resolucion del viewport actual.
 * agrega al body un data-resolution con el dato
 * @private
 * @memberOf Core.Utils
 * @return {string} Resolución actual como string
 */

const getResolutionKey = () => {
	const ww = window.innerWidth;
	const resolution = Object.keys(RESOLUTIONS).reduce((acum, current) => {
		const { min, max } = RESOLUTIONS[current];
		return ww >= min && ww <= max ? current : acum;
	}, '');

	document.querySelector('body').dataset.resolution = resolution;
	return resolution;
};

/**
 * Retorna el resultado de una comparacion especifica
 * @private
 * @memberOf Core.Utils
 * @param  {string} operator operador de comparacion '<' '>' '<=' '>='
 * @param  {string} resolution abreviatura de resolución 'xxs' 'xs' 'sm' 'md' 'lg'
 * @return {boolean} Respuesta de la comparación
 */

const compareResolutions = (operator, resolution) => {
	try {
		const ops = {
			'>': (x, y) => x.min > y.max,
			'<': (x, y) => x.max < y.min,
			'>=': (x, y) => x.min >= y.min,
			'<=': (x, y) => x.max <= y.max
		};

		const current = getResolutionKey();

		if (!current)
			throw new RangeError(
				'No se pudo hacer la comparativa de este dispositivo, revisar las resoluciones configuradas en RESOLUTIONS'
			);

		return ops[operator](RESOLUTIONS[current], RESOLUTIONS[resolution]);
	} catch (reason) {
		// eslint-disable-next-line no-console
		console.warn(reason);
		return false;
	}
};

export const Utils = {
	customTrigger,
	waitForThisEventEnd,
	debounce,
	getResolutionKey,
	compareResolutions
};
