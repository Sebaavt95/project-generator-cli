export const defaultStatus = {
	emptyValue: '',
	badRequest: '',
	hadCoupon: '',
	invalid: '',
	success: '',
	couponRemove: ''
};

export const setStatus = (key, text) => {
	if (!key || !text) return null;
	return Object.assign({}, defaultStatus, { [key]: text });
};
export const addCouponVtex = value =>
	new Promise((resolve, reject) => {
		window.vtexjs.checkout
			.addDiscountCoupon(value)
			.done(resolve)
			.fail(reject);
	});
export const removeCouponVtex = () =>
	new Promise((resolve, reject) => {
		window.vtexjs.checkout
			.removeDiscountCoupon()
			.done(resolve)
			.fail(reject);
	});

export const filterMessageCoupon = (arr, value) => {
	const regex = new RegExp(value);
	return arr.filter(msg => regex.test(msg.text)).slice(-1);
};

export const getCoupon = orderForm => {
	try {
		if (!orderForm) throw new Error('orderForm is null');
		const {
			marketingData: { coupon = null }
		} = orderForm;
		return coupon;
	} catch (reason) {
		return null;
	}
};
