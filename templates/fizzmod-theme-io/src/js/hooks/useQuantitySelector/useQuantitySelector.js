import { useState } from 'react';

const useQuantitySelector = (initialQty = 1, step = 1, min = 1, max = 99999) => {
	const [quantity, setQuantity] = useState(initialQty);
	const [oldQuantity, setOldQuantity] = useState(initialQty);

	const validateCustomValue = value => {
		if (Number.isNaN(Number(value))) return min;

		if (max && Number(value) > max) return max;

		return value;
	};

	const plusHandler = () => {
		if (quantity >= max) return;

		if (!min || quantity >= min) {
			setOldQuantity(quantity);
			setQuantity(Number(quantity) + step);
		}
	};

	const minusHandler = () => {
		if (!max || quantity <= max) {
			setOldQuantity(quantity);
			setQuantity(Number(quantity) - step);
		}
	};

	const setCustomQuantity = value => {
		const parsedValue = validateCustomValue(value);

		const oldQuantityValue = value || quantity || min;
		setOldQuantity(oldQuantityValue);
		setQuantity(parsedValue);
	};

	return {
		plusHandler,
		minusHandler,
		quantity,
		oldQuantity,
		setCustomQuantity
	};
};

export default useQuantitySelector;
