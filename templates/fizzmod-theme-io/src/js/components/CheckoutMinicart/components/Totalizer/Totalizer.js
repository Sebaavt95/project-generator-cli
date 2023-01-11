import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import { customFormatPrice } from 'utils/project';
import styles from './styles';

const Totalizer = ({ value, id }) => {
	const totalizersTitle = {
		Total: 'Total',
		Shipping: 'Costo de envío',
		Items: 'Subtotal',
		Discounts: 'Descuentos'
	};
	const totalizerValue = typeof value === 'string' ? value : customFormatPrice(value / 100);

	return (
		<styles.Wrapper id={id}>
			<styles.Title variant={id === 'Total' ? 'body1' : 'subtitle2'} component="body1">
				{id === 'Total' ? id : `${totalizersTitle[id] || id}:`}
			</styles.Title>
			<styles.Value variant="subtitle2" component="body1" underline={id === 'Shipping'}>
				{totalizerValue}
			</styles.Value>
		</styles.Wrapper>
	);
};

Totalizer.propTypes = {
	id: string.isRequired,
	value: oneOfType([string, number])
};

Totalizer.defaultProps = {
	value: ''
};

export default Totalizer;
