import React from 'react';
import { customFormatPrice, getPriceByUnitMultiplier } from 'utils/project';
import { number, bool } from 'prop-types';
import styles from './styles';

const BestPrice = ({ value, nonDivisable, unitMultiplier, ...rest }) => {
	if (!value && value !== 0) return null;

	const bestPrice = getPriceByUnitMultiplier(value, unitMultiplier) || 0;

	return (
		<styles.BestPrice {...rest}>
			{customFormatPrice(nonDivisable ? bestPrice : bestPrice / 100)}
		</styles.BestPrice>
	);
};

BestPrice.propTypes = {
	value: number.isRequired,
	unitMultiplier: number,
	nonDivisable: bool
};

BestPrice.defaultProps = {
	nonDivisable: false,
	unitMultiplier: 1
};

export default BestPrice;
