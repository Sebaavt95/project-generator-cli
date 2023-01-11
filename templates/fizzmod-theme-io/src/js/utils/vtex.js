import axios from 'axios';
import store from 'utils/store';
import { stripHost, getCookie } from '@fizzmod/utils';
import { hoursFromNow } from 'utils/time';
import { querablePromise } from 'utils';
import queryString from 'query-string';
import getFlagsFromSearch from './flags';

const { login, env } = ENV;

/*
 * VTEX - GLOBAL
 */

const SALES_CHANNEL_COOKIE = 'VTEXSC';

export const getCurrentSalesChannel = () => {
	const scCookie = getCookie(SALES_CHANNEL_COOKIE);

	if (scCookie) {
		const parsedScCookie = scCookie.replace('sc=', '');

		return parsedScCookie;
	}

	const { orderForm = {} } = (window.vtexjs && window.vtexjs.checkout) || {};
	const { salesChannel } = orderForm;

	return salesChannel || '1';
};

export const isSearchPage = () => /resultado-busca/.test(document.querySelector('body').className);

export const responseHTMLtoJSON = htmlData => {
	const parser = new DOMParser();
	const html = parser.parseFromString(htmlData, 'text/html');
	const products = [...html.querySelectorAll('.js-product-data')];
	const data = products.reduce((acum, product) => {
		let productData = product.querySelector('.data').innerText;
		const discountHighLights = product.querySelectorAll('.discount-highlight .flag');
		const collectionHighLights = product.querySelectorAll('.collection-highlight .flag');
		const customFlags = product.querySelectorAll('li');
		const allFlags = [...discountHighLights, ...collectionHighLights, ...customFlags];
		productData = productData.replace(/True/g, 'true').replace(/False/g, 'false');
		productData = JSON.parse(productData);
		productData.flags = allFlags.map(promotion => promotion.innerText);
		productData.brand = product.querySelector('.texto.brand').innerText;
		productData.imageUrl = product.querySelector('.product-image img').src;
		acum.push(productData);
		return acum;
	}, []);
	return data;
};

export const searchProductParser = (products = [], showOutOfStock = true) => {
	try {
		return products
			.map(product => {
				const { items, linkText, productName, brand, allSpecifications = [] } = product;

				if (!items || !items.length) return null;

				const { sellers = [], images = [], unitMultiplier, measurementUnit } = items[0];

				const { commertialOffer = {} } = sellers[0] || {};

				if (!showOutOfStock && !commertialOffer.AvailableQuantity) return null;
				const attributes = allSpecifications.map(specificationName => ({
					attributeName: specificationName,
					attributeValue: product[specificationName] || []
				}));

				const legalPrice = {
					unitMultiplier,
					measurementUnit
				};

				const flags = getFlagsFromSearch(product);

				return {
					...items[0],
					isInStock: commertialOffer.AvailableQuantity || false,
					url: linkText ? `/${linkText}/p` : '',
					name: productName || '',
					skuId: items[0].itemId,
					imageUrl: images.length ? images[0].imageUrl : '',
					listPrice: commertialOffer.ListPrice,
					bestPrice: commertialOffer.Price,
					attributes,
					brand,
					legalPrice,
					hasSkuSelector: items.length > 1,
					flags
				};
			})
			.filter(Boolean);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.err('searchProductParser function', error);
		return [];
	}
};

/*
 * VTEX - USER
 */

let userProfilePromise = null;

export const getProfile = () => {
	if (userProfilePromise && (userProfilePromise.isPending() || userProfilePromise.isFulfilled()))
		return userProfilePromise;

	const originalPromise = new Promise((resolve, reject) => {
		axios
			.get('/no-cache/profileSystem/getProfile')
			.then(response => {
				const { data } = response;
				if (data && (typeof data.IsUserDefined === 'undefined' || !data.IsUserDefined))
					reject(new Error('user undefined'));
				else resolve(data);
			})
			.catch(error => {
				reject(error);
			});
	});

	userProfilePromise = querablePromise(originalPromise);

	return userProfilePromise;
};

export const initVtexLogin = () => {
	window.vtexid.setScope(login.scope);
	window.vtexid.setScopeName(login.scopeName);

	const returnUrl = stripHost(encodeURI(window.location.href));

	window.vtexid.start({
		returnUrl,
		userEmail: '',
		locale: login.locale,
		forceReload: true
	});
};

/*
 * CATEGORIES
 */

/**
 *  @function getCategories
 *  @description Function for get a espeficic categorie in categories three
 *  @memberof vtex.categories
 *	@param [depth=50] - The tree depth
 *	@returns {promise} Promise
 */
export const getCategories = () => {
	return new Promise((resolve, reject) => {
		axios({
			method: 'get',
			url: `/api/catalog_system/pub/category/tree/50`,
			dataType: 'json',
			headers: {
				accept: 'application/json',
				contentType: 'application/json; charset=utf-8'
			}
		})
			.then(response => {
				return response && response.data && response.status && response.status === 200
					? resolve(response.data)
					: reject(response);
			})
			.catch(reject);
	});
};

let categoryTreeXHR = null;

/**
 * 	@function getCategoryTree
 *  @description Function for get a categorie three
 *  @memberof vtexUtils.categories
 *	@returns {promise} Promise
 */
export const getCategoryTree = () => {
	if (categoryTreeXHR) return categoryTreeXHR;

	categoryTreeXHR = new Promise(resolve => {
		const storedCategoryTree = store.get('storedCategoryTree');
		if (!storedCategoryTree || !storedCategoryTree.length) {
			getCategories()
				.then(categoryTree => {
					const expirationTime = new Date().getTime() + 60 * 60 * 1000;
					store.set('storedCategoryTree', categoryTree, expirationTime);
					resolve(categoryTree);
				})
				.catch(err => {
					console.error(err);
					resolve([]);
				});
		} else resolve(storedCategoryTree);
	});

	return categoryTreeXHR;
};

/*
 * PRICES
 */

/* get fixed price */
export const getFixedPrices = skuId => {
	if (!skuId) return [];

	return new Promise((resolve, reject) => {
		axios
			.get(`/${env}/pricing/prices/${skuId}/fixed`)
			.then(({ data }) => {
				resolve(data);
			})
			.catch(error => {
				reject(error);
			});
	});
};

/**
 * ORDER FORM
 */

/**
 * @function getOrderForm
 * @memberof vtexUtils.orderFormFunctions
 * @description Function for getter a lasted orderForm.
 * @see {@link https://github.com/vtex/vtex.js/tree/master/docs/checkout#getorderformexpectedorderformsections}
 * @returns {Promise}
 */
export const getOrderForm = () => {
	let tryCount = 0;
	const request = () => {
		if (window.vtexjs && window.vtexjs.checkout) {
			return new Promise((resolve, reject) => {
				if (window.vtexjs.checkout.orderForm) return resolve(window.vtexjs.checkout.orderForm);

				window.vtexjs.checkout
					.getOrderForm()
					.done(orderForm => {
						resolve(orderForm);
					})
					.fail(error => {
						console.error('Error vtexjs.checkout.getOrderForm: ', error);
						reject(new Error('Fail vtexjs.checkout.getOrderForm'));
					});
			});
		}
		if (tryCount <= 3) {
			tryCount += 1;
			return request();
		}

		return Promise.reject(new Error('Not exist vtexjs.checkout'));
	};

	return request();
};

export const addCoupon = value =>
	new Promise((resolve, reject) => {
		window.vtexjs.checkout
			.addDiscountCoupon(value)
			.done(resolve)
			.fail(reject);
	});
export const removeCoupon = () =>
	new Promise((resolve, reject) => {
		window.vtexjs.checkout
			.removeDiscountCoupon()
			.done(resolve)
			.fail(reject);
	});

export const getBrands = async () => {
	try {
		const storedBrands = store.get('storedBrands');

		if (!storedBrands || !storedBrands.length) {
			const { data } = await axios.get(`/api/catalog_system/pub/brand/list`);

			const expirationTime = hoursFromNow(5);
			store.set('storedBrands', data, expirationTime);

			return data;
		}

		return storedBrands;
	} catch (e) {
		Promise.reject(e);
	}
};

/* Aviseme */

const AVISEMEURL = '/no-cache/AviseMe.aspx';

export const sendAviseme = async (data = {}) => {
	try {
		const formData = new FormData();

		const { sku: notifymeIdSku, email: notifymeClientEmail, name: notifymeClientName } = data;

		if (!notifymeIdSku) throw new Error('"sku" parameter is required.');

		if (!notifymeClientEmail) throw new Error('"email" parameter is required.');

		if (!notifymeClientName) throw new Error('"name" parameter is required.');

		const parsedData = {
			notifymeClientName,
			notifymeClientEmail,
			notifymeIdSku
		};

		Object.keys(parsedData).forEach(key => {
			formData.append(key, parsedData[key]);
		});

		const res = await axios({
			method: 'POST',
			url: AVISEMEURL,
			data: formData,
			config: { headers: { 'Content-Type': 'multipart/form-data' } }
		});
		return res;
	} catch (e) {
		return Promise.reject(e);
	}
};

/**
 * get order by url id.
 * @returns promise with order
 */
export const getOrderByUrlId = async () => {
	try {
		const { location } = window;
		const reference = location.search ? location.search : location.pathname;
		const orderId = reference.match(/\d+/)[0];
		const url = `/api/checkout/pub/orders/order-group/${orderId}`;
		const { data } = await axios.get(url);
		return data;
	} catch (reason) {
		return Promise.reject(reason);
	}
};

export const updateOrderForm = salesChannel => {
	// Updates orderForm
	const [item] = window.vtexjs.checkout.orderForm.items;
	const items = [{ id: item.id, quantity: item.quantity, seller: item.seller }];

	return new Promise(resolve => {
		window.vtexjs.checkout
			.addToCart(items, null, salesChannel)
			.done(resolve)
			.fail(resolve);
	});
};

export const addUrlSearch = (param = '', value = '') => {
	const { search } = window.location;
	const currentParams = queryString.parse(search);

	const newSearch = {
		...currentParams,
		[param]: value
	};

	return `?${queryString.stringify(newSearch)}`;
};

export const redirToChange = sc => {
	if (!sc) return;
	window.location = addUrlSearch('sc', sc);
};

export const setSalesChannel = sc => {
	const inCheckout = /checkout/.test(window.location.href);

	if (inCheckout) {
		updateOrderForm(sc).then(() => {
			window.location.reload();
		});
	} else {
		// Reloads to complete change
		redirToChange(sc);
	}
};

export const changeSaleChannel = async (sc, immediate = false) => {
	if (!immediate) {
		setTimeout(() => {
			setSalesChannel(sc);
		}, 1500);
	} else setSalesChannel(sc);
};
