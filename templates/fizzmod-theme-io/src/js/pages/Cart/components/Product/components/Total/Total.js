import React from 'react';
import { number } from 'prop-types';
import { customFormatPrice } from 'utils/project';
import styles from './styles';

const Total = ({ total }) => (
	<styles.Wrapper>
		<styles.Total variant="h6" component="body1">
			{customFormatPrice(total / 100)}
		</styles.Total>
	</styles.Wrapper>
);

Total.propTypes = {
	total: number.isRequired
};
export default Total;
