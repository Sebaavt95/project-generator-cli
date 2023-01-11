module.exports = {
	env: '{{projectVendor}}',
	isProd: true,
	isQa: false,
	activeCheckoutModules: {
		orderSubstitutes: true,
		storeSelector: false
	},
	substitutesMethod: 'custom-data-v2',
	googleApiKey: '',
	storesSource: 'json-file'
};
