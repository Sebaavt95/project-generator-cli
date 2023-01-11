import React from 'react';
import { number, string } from 'prop-types';
import styles from './styles';

const Prices = ({ bestPrice, unitMultiplier, measurementUnit }) => (
	<styles.Wrapper>
		<styles.BestPrice
			value={bestPrice}
			unitMultiplier={unitMultiplier}
			measurementUnit={measurementUnit}
			variant="h6"
			component="body1"
		/>
		<styles.PPUMPrice
			value={bestPrice}
			unitMultiplier={unitMultiplier}
			measurementUnit={measurementUnit}
		/>
	</styles.Wrapper>
);

Prices.propTypes = {
	bestPrice: number.isRequired,
	unitMultiplier: number,
	measurementUnit: string
};

Prices.defaultProps = {
	unitMultiplier: 1,
	measurementUnit: 'un'
};

export default Prices;
