import React from 'react';
import { arrayOf, object } from 'prop-types';
import Row from './components/Row';
import styles from './styles';

const translateName = {
	items: 'Subtotal',
	discounts: 'Descuentos',
	shipping: 'Costo de envío'
};

const Description = ({ totalizers }) => {
	if (!totalizers || !totalizers.length) return null;
	const renderTotals = totalizers.map(({ id, value, highlight }) => (
		<Row key={id} name={translateName[id.toLowerCase()]} value={value} highlight={highlight} />
	));
	return <styles.Wrapper>{renderTotals}</styles.Wrapper>;
};

Description.propTypes = {
	totalizers: arrayOf(object)
};

Description.defaultProps = {
	totalizers: []
};

export default Description;
