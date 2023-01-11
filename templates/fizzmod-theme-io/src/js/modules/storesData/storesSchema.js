import {
	validPolygons,
	validZipcodes,
	convertInteger,
	convertFloat,
	parseStoresData,
	filterRequired
} from './utils';

const requireSchema = ['id', 'name', 'lat', 'lng'];

const schemaParser = {
	id: value => convertInteger(value, 10),
	sc: value => convertInteger(value, 10),
	regionId: value => value || '',
	polygons: value => validPolygons(value),
	zipCodes: value => validZipcodes(value),
	name: value => value || '',
	lat: value => convertFloat(value, 10),
	lng: value => convertFloat(value, 10),
	zipCode: value => convertInteger(value, 10),
	stateLat: value => convertFloat(value, 10),
	stateLng: value => convertFloat(value, 10),
	ecommerce: value => typeof value === 'boolean' && value,
	state: value => value || ''
};

const processStoresSchema = (rawStores, externalSchemaParser, externalRequireSchema) => {
	try {
		const mergedSchemas = { ...schemaParser, ...externalSchemaParser };
		const mergedRequired = [...requireSchema, ...externalRequireSchema];
		const parsedStores = parseStoresData(rawStores, mergedSchemas);
		const validStores = filterRequired(parsedStores, mergedRequired);
		return validStores;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.warn(`Stores Data - Error processing storesData from MD.`);
		return [];
	}
};

export default processStoresSchema;
