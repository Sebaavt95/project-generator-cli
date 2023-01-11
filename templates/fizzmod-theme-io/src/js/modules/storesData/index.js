import { validResponse, getStoresData } from './utils';
import processStoresData from './parseStoresData';
import { configLocal } from './config';
import storesJson from './stores.json';

/**
 * @name storesData
 * @description function that returns the stores data, from masterData or from cache
 * @return promise
 */

const storesData = async ({ entity = '', entityFields = [], parsers = {}, requires = [] } = {}) => {
	const { storesSource } = ENV;
	try {
		const data =
			storesSource === 'master-data' ? await getStoresData(entity, entityFields) : storesJson;
		if (!validResponse(data))
			throw new Error('Invalid storeData. It may due to a problem with masterData.');

		const parsedStoresData = processStoresData(data, parsers, requires);
		return parsedStoresData;
	} catch (reason) {
		// eslint-disable-next-line no-console
		console.warn(reason.message);
		return configLocal;
	}
};

export default storesData;
