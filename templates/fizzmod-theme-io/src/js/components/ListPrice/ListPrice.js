import React from 'react';
import { customFormatPrice, getPriceByUnitMultiplier } from 'utils/project';
import { number, bool } from 'prop-types';
import styles from './styles';

const ListPrice = ({ value, nonDivisable, unitMultiplier, ...rest }) => {
	if (!value) return null;

	const listPrice = getPriceByUnitMultiplier(value, unitMultiplier);
	return (
		<styles.ListPrice {...rest}>
			{customFormatPrice(nonDivisable ? listPrice : listPrice / 100)}
		</styles.ListPrice>
	);
};

ListPrice.propTypes = {
	value: number.isRequired,
	unitMultiplier: number,
	nonDivisable: bool
};

ListPrice.defaultProps = {
	nonDivisable: false,
	unitMultiplier: 1
};

export default ListPrice;
