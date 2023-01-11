import store from 'utils/store';
import { masterData } from 'utils/project';
import { validateArr, validateNumber, validateObj, isRequired } from 'utils';
import { minutesFromNow } from 'utils/time';
import { cacheName, masterDataEntity, masterDataFields } from './config';

export const validResponse = res =>
	validateArr(res) && res.every(storeData => validateObj(storeData));

const parsePolygons = rawPolygons => {
	try {
		return typeof rawPolygons === 'string' ? JSON.parse(rawPolygons) : rawPolygons;
	} catch (e) {
		return [];
	}
};

const parseZipcodes = rawZipcodes => {
	try {
		return rawZipcodes.split(',').map(zip => parseInt(zip, 10));
	} catch (e) {
		return [];
	}
};

export const convertInteger = value =>
	value && validateNumber(parseInt(value, 10)) ? parseInt(value, 10) : 0;

export const convertFloat = value =>
	value && validateNumber(parseFloat(value, 10)) ? parseFloat(value, 10) : 0;

export const validPolygons = (polygons = []) => {
	try {
		const parsedPolygons = parsePolygons(polygons);
		if (!validateArr(parsedPolygons))
			throw new Error('Stores data - Polygon validation error: Malformed polygon ');

		const processedPolygons = parsedPolygons.filter(polygon => {
			if (!validateArr(polygon)) return false;
			const validGeocoordinates = polygon.every(geocoordinates => {
				return validateArr(geocoordinates) && geocoordinates.every(point => validateNumber(point));
			});
			return validGeocoordinates;
		});
		return processedPolygons;
	} catch (error) {
		return [];
	}
};

export const validZipcodes = (zipCodes = '') => {
	try {
		const parsedZipcodes = parseZipcodes(zipCodes);
		if (!validateArr(parsedZipcodes))
			throw new Error('Stores data - Zipcodes validation error: Malformed zipcodes ');

		return parsedZipcodes.filter(zipcode => validateNumber(zipcode));
	} catch (error) {
		return [];
	}
};

export const createStatesArray = storesData => {
	const states = storesData.reduce((statesArray, storeData) => {
		if (!storeData.state) return statesArray;
		const stateIndex = statesArray.findIndex(state => storeData.state === state.name);
		if (stateIndex === -1)
			return [
				...statesArray,
				{
					name: storeData.state,
					stores: [storeData.id],
					lat: storeData.stateLat,
					lng: storeData.stateLng
				}
			];
		statesArray[stateIndex].stores.push(storeData.id);
		return statesArray;
	}, []);
	return states;
};

export const parseStoresData = (rawStores = [], mergedSchemas = {}) => {
	const schemaParser = { ...mergedSchemas };
	return rawStores.map(storeData => {
		/* For each store we perform various validations */
		const parsedStore = { ...storeData };
		Object.keys(schemaParser).forEach(key => {
			try {
				/* First validate if every schema parser is a function, if not, we turn it into one */
				if (typeof schemaParser[key] !== 'function') schemaParser[key] = value => value;

				/* For each key we overwrite the previous value with the new parsed one */
				parsedStore[key] = schemaParser[key](parsedStore[key]);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.warn(`Stores Data - Error processing key ${key}`);
			}
		});
		return parsedStore;
	});
};

export const filterRequired = (parsedStores = [], mergedRequired = []) => {
	return parsedStores.filter(parsedStore => {
		return mergedRequired.every(required => {
			try {
				const storeValue = parsedStore[required];
				if (Array.isArray(storeValue) && !validateArr(storeValue))
					isRequired('Stores Data', required);
				if (typeof storeValue !== 'boolean' && !storeValue) isRequired('Stores Data', required);
				return true;
			} catch (error) {
				// eslint-disable-next-line no-console
				console.warn(error);
				return false;
			}
		});
	});
};

export const getStoresData = async (externalEntity = '', entityFields = []) => {
	const cachedData = store.get(cacheName);
	if (cachedData) return cachedData;
	const fields = [...masterDataFields, ...entityFields];
	const entity = externalEntity || masterDataEntity;
	const remoteData = await masterData.search(entity, {}, fields);
	store.set(cacheName, remoteData, minutesFromNow(60));
	return remoteData;
};
