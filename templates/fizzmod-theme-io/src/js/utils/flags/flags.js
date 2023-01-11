import config from './config';

const limitFlags = (flags = [], limit) => {
	if (!limit || typeof limit !== 'number') return flags;

	return flags.slice(0, limit);
};

const getFlagsFromSearch = product => {
	const { items, clusterHighlights = {} } = product;

	if (!items || !items.length) return null;
	const collectionHighlights = Object.keys(clusterHighlights).map(key => clusterHighlights[key]);

	const { sellers = [] } = items[0];
	const { commertialOffer = {} } = sellers[0] || {};
	const { Teasers = [], DiscountHighLight = [] } = commertialOffer;

	const parsedTeasers = Teasers.map(teaser => teaser['<Name>k__BackingField'] || null).filter(
		Boolean
	);

	const parsedDiscountHighlight = DiscountHighLight.map(
		discountFlag => discountFlag['<Name>k__BackingField'] || null
	).filter(Boolean);

	const { limit = {} } = config || {};
	const { collection, discount } = limit || {};

	const flags = {
		collectionHighlights: limitFlags(collectionHighlights, collection),
		discountHighlights: limitFlags([...parsedTeasers, ...parsedDiscountHighlight], discount)
	};

	return flags;
};

export default getFlagsFromSearch;
