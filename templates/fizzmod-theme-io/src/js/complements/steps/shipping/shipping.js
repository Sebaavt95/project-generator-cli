export const validateShipping = orderForm => {
	try {
		const {
			shippingData: { address }
		} = orderForm;

		const fields = [
			'addressId',
			'addressType',
			'country',
			'postalCode',
			'number',
			'state',
			'street'
		];
		return fields.some(key => address[key]);
	} catch (reason) {
		return null;
	}
};
