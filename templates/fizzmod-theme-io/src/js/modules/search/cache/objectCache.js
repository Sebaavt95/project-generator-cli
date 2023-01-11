/**
 * @name objectCache
 * @private
 * @description - instance of cache to save data on key:data way
 * @returns {object} - object with functions
 * @example const cache = objectCache();
 * // cache.save(['key-1'], 'some data');
 * // console.log(cache.getCache());
 * // output {'key-1': 'some data'};
 */
const objectCache = () => {
	let cache = {};

	/**
	 * @name save
	 * @private
	 * @description - save data on specific keys
	 * @param {array} keys - array of key to save data
	 * @param {object} data - data to save
	 * @returns {boolean} - true if all is ok, false if something fails with params
	 */
	const save = (keys, data) => {
		if (!keys || !(keys instanceof Array)) return false;

		if (!data) return false;

		cache = keys.reduce((acc, key) => {
			if (typeof key !== 'string' && typeof key !== 'number') return cache;

			return { ...acc, [key]: data };
		}, cache);

		return true;
	};

	/**
	 * @name getCache
	 * @private
	 * @description - get all cached data
	 * @returns {object} - object with cached data
	 */
	const getCache = () => {
		return cache;
	};

	/**
	 * @name getKey
	 * @private
	 * @description - get specific key data
	 * @param {string} key - key name to obtain
	 * @returns {object} - object with data if exists
	 */
	const getKey = key => {
		if (!key) return null;

		return cache[key];
	};

	return {
		save,
		getCache,
		getKey
	};
};

export default objectCache;
