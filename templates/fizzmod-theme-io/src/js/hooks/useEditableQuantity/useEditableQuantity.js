import { useState } from 'react';
import { removeSpaces, validateNumber } from 'utils';
import useQuantitySelector from '../useQuantitySelector';

const useEditableQuantity = (...params) => {
	const [isFocus, setIsFocus] = useState(false);

	const { setCustomQuantity, quantity, oldQuantity, ...rest } = useQuantitySelector(...params);

	const focusFn = () => {
		setCustomQuantity('');

		setIsFocus(true);
	};

	const blurFn = () => {
		if (!quantity) setCustomQuantity(oldQuantity);

		setIsFocus(false);
	};

	const changeFn = event => {
		const {
			target: { value }
		} = event;

		if (value === '') setCustomQuantity(value);

		let parsedValue = removeSpaces(value);

		if (!validateNumber(parsedValue)) return;

		parsedValue = Math.ceil(Number(parsedValue));

		setCustomQuantity(parsedValue);
	};

	return {
		isFocus,
		focusFn,
		blurFn,
		changeFn,
		setCustomQuantity,
		quantity,
		oldQuantity,
		...rest
	};
};

export default useEditableQuantity;
