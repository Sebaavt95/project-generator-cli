import { configLocal } from './config';
import processStoresSchema from './storesSchema';
import { createStatesArray } from './utils';

/**
 * @name processStoresData
 * @description function that returns the correct storesData
 * @return object
 */

const processStoresData = (
	rawStoresData = [],
	externalSchemaParser = {},
	externalRequireSchema = []
) => {
	const stores = processStoresSchema(rawStoresData, externalSchemaParser, externalRequireSchema);
	const states = createStatesArray(stores);
	const storesObject = { ...configLocal, states, stores };
	return storesObject;
};

export default processStoresData;
