export const validateProfile = () => {
	const { toJSON } = window.clientProfileData;
	const data = toJSON();
	const corporate = data.isCorporate;
	if (!data.email) return null;
	let fields = ['email', 'firstName', 'lastName', 'document', 'phone'];
	if (corporate) fields = [...fields, ['corporateName', 'corporateDocument', 'tradeName']];
	const normal = fields.some(key => data[key]);
	const custom = true;
	return normal && custom;
};
