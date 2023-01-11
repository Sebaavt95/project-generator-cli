import React from 'react';
import { number, bool, string, arrayOf } from 'prop-types';
import { customFormatPrice } from 'utils/project';
import styles from './styles';

const PPUMPrice = ({
	value,
	unitMultiplier,
	measurementUnit,
	unitsToShow,
	nonDivisable,
	...rest
}) => {
	if (!value || Number.isNaN(Number(value)) || !unitsToShow.includes(measurementUnit))
		return <styles.EmptyDiv />;

	const dividedPrice = nonDivisable ? value : value / 100;
	const ppumPriceString = customFormatPrice(dividedPrice);

	return (
		<styles.PPUMPrice {...rest} variant="overline" component="body1">
			{`${ppumPriceString} x ${measurementUnit}`}
		</styles.PPUMPrice>
	);
};

PPUMPrice.propTypes = {
	value: number.isRequired,
	nonDivisable: bool,
	unitMultiplier: number,
	measurementUnit: string,
	unitsToShow: arrayOf(string)
};

PPUMPrice.defaultProps = {
	nonDivisable: false,
	unitMultiplier: 1,
	measurementUnit: 'un',
	unitsToShow: ['kg']
};

export default PPUMPrice;
