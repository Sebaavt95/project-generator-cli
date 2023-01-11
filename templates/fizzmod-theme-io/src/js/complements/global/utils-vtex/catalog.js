import axios from 'axios';

/**
 * Utiliiza API SEARCH para realizar busquedas de productos
 * @async
 * @private
 * @memberOf Private
 * @param  {String} requests Busqueda a realizar
 * @return {Array} Conjuntos de productos encontrados a partir de la busqueda
 */

const getProductData = async requests => {
	const url = `/api/catalog_system/pub/products/search?${requests}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (err) {
		console.log('Error ==> ', err); // eslint-disable-line
	}
};

/**
 * Busca las especificaciones tecnicas de uno o más productos en base a su
 * SKU dependiendo del tipo de precio del cliente
 * @async
 * @memberof Core.Catalog
 * @param  {Array} items Array con los SKUs de los productos a buscar
 * @return {Array}
 */

const getProductDataByIds = (items, sc = 1) => {
	const fqs = items.map(item => `fq=productId:${item}`);

	const request = fqs.reduce(
		(accum, curr, i, arr) =>
			i === arr.length - 1 ? `${accum}${curr}&sc=${sc}` : `${accum}${curr}&`,
		''
	);

	return new Promise((resolve, reject) => {
		getProductData(request)
			.then(response => resolve(response))
			.catch(reason => reject(reason));
	});
};

export const Catalog = {
	getProductDataByIds
};
