/**
 * @name callApiWithCache
 * @private
 * @description - exec a API call, save it in cache, and merge cached data with new data
 * @param {array} items - array of items to get in api
 * @param {object} config
 * @param {object} config.cache - instance of objectCache
 * @param {function} config.getIdCallback - callback to get id/key to save in cache
 * @param {promise} config.api - promise function to call API
 * @returns {promise} - promise that resolves with response (merge beetween cached data and new data)
 */
const callApiWithCache = async (items = [], config = {}) => {
	try {
		const { cache, getIdCallback, api } = config;

		const noCachedkeys = [];
		const cachedItems = [];

		items.forEach(itemId => {
			const itemData = cache.getKey(itemId);

			if (itemData) {
				cachedItems.push(itemData);

				return;
			}

			noCachedkeys.push(itemId);
		});

		if (noCachedkeys && noCachedkeys.length) {
			const res = await api(noCachedkeys);

			if (!res) return [];

			res.forEach(item => cache.save(getIdCallback(item), item));

			return [...cachedItems, ...res];
		}

		return cachedItems;
	} catch (error) {
		return Promise.reject(error);
	}
};

export default callApiWithCache;
