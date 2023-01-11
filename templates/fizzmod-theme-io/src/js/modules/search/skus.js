import { searchSkus as searchSkusFn } from '@fizzmod/vtex-utils';
import objectCache from './cache/objectCache';
import callApiWithCache from './middlewares/callApiWithCache';

const cache = objectCache();

/**
 * @name searchSkus
 * @public
 * @description - promise function to search skus and save response in cache
 * @param {array} items - array of skuIds to search
 * @returns {promise}
 * @example searchSkus([1, 2, 3]).then(console.log)
 * // output: [{productId: 1, items: [...], ...rest}, {productId: 2, items: [...], ...rest}, {productId: 3, items: [...], ...rest}]
 */
const searchSkus = async (items = []) => {
	try {
		if (!items || !items.length) return [];

		const getIdCallback = data => {
			return data.items.map(sku => sku.itemId);
		};

		const config = {
			cache,
			getIdCallback,
			api: searchSkusFn
		};

		const res = await callApiWithCache(items, config);

		return res;
	} catch (error) {
		return Promise.reject(error);
	}
};

export default searchSkus;
