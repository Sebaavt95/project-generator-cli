import { useState, useEffect } from 'react';
import {
	setStatus,
	addCouponVtex,
	removeCouponVtex,
	filterMessageCoupon,
	getCoupon,
	defaultStatus
} from './utils';

const defaultText = {
	emptyValue: 'Este campo es obligatorio',
	badRequest: 'Surgió un error, vuelva a intentarlo',
	hadCoupon: 'Solo se puede tener un cupón activo',
	invalid: 'Cupón inválido',
	success: 'Cupón aceptado',
	couponRemove: 'El cupón ha sido eliminado'
};

const useCouponVtex = (orderForm = null) => {
	const [valueCoupon, setValueCoupon] = useState('');
	const [statusMsg, setStatusMsg] = useState(defaultStatus);
	const [isValidCoupon, setIsValidCoupon] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleAddCoupon = async value => {
		try {
			setLoading(true);
			if (!value) {
				setStatusMsg(setStatus('emptyValue', defaultText.emptyValue));
				return setLoading(false);
			}
			const hasCoupon = !!valueCoupon;
			if (hasCoupon) {
				setStatusMsg(setStatus('hadCoupon', defaultText.hadCoupon));
				return setLoading(false);
			}
			const res = await addCouponVtex(value);
			const {
				messages,
				marketingData: { coupon }
			} = res;
			if (coupon) {
				setStatusMsg(setStatus('success', defaultText.success));
				return setLoading(false);
			}
			const msg = filterMessageCoupon(messages, value);
			if (msg.length) {
				setStatusMsg(setStatus('invalid', defaultText.invalid));
				return setLoading(false);
			}
		} catch (reason) {
			console.error(reason);
			setStatusMsg(setStatus('badRequest', defaultText.badRequest));
			setIsValidCoupon(false);
			setLoading(false);
		}
	};

	const handleRemoveCoupon = async () => {
		try {
			setLoading(true);
			if (!valueCoupon) return null;
			await removeCouponVtex();
			setLoading(false);
			return setStatusMsg(setStatus('couponRemove', defaultText.couponRemove));
		} catch (reason) {
			setLoading(false);
			setStatusMsg(defaultText.badRequest);
		}
	};
	useEffect(() => {
		setValueCoupon(getCoupon(orderForm));
	}, [orderForm]);

	useEffect(() => {
		setIsValidCoupon(!!valueCoupon);
	}, [valueCoupon]);

	return {
		valueCoupon,
		loading,
		statusMsg,
		handleRemoveCoupon,
		handleAddCoupon,
		isValidCoupon
	};
};

export default useCouponVtex;
