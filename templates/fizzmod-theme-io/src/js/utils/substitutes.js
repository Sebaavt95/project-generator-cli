/* eslint-disable import/prefer-default-export */

export const setSubstitutesMethodForConfig = substitutesMethod => {
	const config = {
		source: substitutesMethod
	};

	if (substitutesMethod !== 'master-data') {
		const appId = substitutesMethod === 'custom-data-v1' ? 'substitutedata' : 'janis';
		config.appId = appId;
	}
	return config;
};
