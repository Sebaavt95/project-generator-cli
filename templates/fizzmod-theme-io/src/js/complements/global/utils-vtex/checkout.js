/* global $ */

import { Utils } from '../utils';

/**
 * @description Funciones utilizadas internamente por `Fizzmod` para usos multiples.
 * @author Pablo E. Guzmán <pablo.guzman@fizzmod.com>
 * @version 1.0.0
 * @Checkout
 * @namespace Core.Checkout
 */

const orderFormReady = () => {
	return new Promise(resolve => {
		const body = document.querySelector('body');
		const className = 'getOrderForm';

		try {
			if (body.classList.contains(className))
				throw new RangeError('Ya se esta ejecutando un getOrderForm');

			if (!vtexjs || !vtexjs.checkout) throw new ReferenceError('No existe vtexjs');

			body.classList.add(className);

			const finish = order => {
				Utils.customTrigger({ name: className }, order);
				body.classList.remove(className);
				return resolve(order);
			};

			if (!vtexjs.checkout.orderForm) {
				vtexjs.checkout
					.getOrderForm()
					.done(finish)
					.fail(response => {
						throw response;
					});
			} else return finish(vtexjs.checkout.orderForm);
		} catch (reason) {
			if (reason.name === 'RangeError')
				return window.addEventListener(className, event => resolve(event.detail));

			return orderFormReady();
		}
	});
};

const getFieldsInThisApp = appName => {
	return new Promise((resolve, reject) => {
		orderFormReady()
			.then(orderForm => {
				const {
					customData: { customApps }
				} = orderForm;
				const fields = customApps.reduce((acum, app) => {
					if (app.id === appName) return Object.assing(acum, app.fields);
					return acum;
				}, {});
				return resolve(fields);
			})
			.catch(reject);
	});
};

const setFieldInCustomData = (orderFormId, app) => {
	return new Promise((resolve, reject) => {
		if (!orderFormId) return reject(new ReferenceError('No se envio un orderForm'));

		const isEmpty = value => typeof value === 'undefined';

		if (isEmpty(app) || isEmpty(app.name) || isEmpty(app.field) || isEmpty(app.value))
			return reject(
				new ReferenceError('Es necesario enviar name, field y value al segundo parámetro')
			);

		const { name, field, value } = app;
		const url = `/api/checkout/pub/orderForm/${orderFormId}/customData/${name}/${field}`;
		const type = 'PUT';
		const expectedOrderFormSections = ['customData'];
		const data = { expectedOrderFormSections, value };

		$.ajax({ url, type, data })
			.success(resolve)
			.fail(reject);
	});
};

const insertInCustomData = (orderFormId, appName, fields) => {
	return new Promise((resolve, reject) => {
		if (!orderFormId || !appName || !fields)
			return reject(new ReferenceError('Debes enviar orderFormId, appName y fields'));

		if (typeof fields !== 'object')
			return reject(
				new ReferenceError('fields debe ser un objeto, ejemplo: { [fieldName]: [value] }')
			);

		const name = appName;
		const keys = Object.keys(fields);
		const loopRequest = (current = 0) => {
			const field = keys[current] || undefined;

			if (!field)
				return vtexjs.checkout
					.getOrderForm()
					.done(resolve)
					.fail(reject);

			const value = fields[field];
			const data = Object.assign({}, { name, field, value });

			setFieldInCustomData(orderFormId, data)
				.then(response => {
					if (response && response.error && response.error.code === '1') return reject(response);

					loopRequest(current + 1);
				})
				.catch(reject);
		};

		loopRequest();
	});
};

export const Checkout = {
	orderFormReady,
	getFieldsInThisApp,
	insertInCustomData
};
