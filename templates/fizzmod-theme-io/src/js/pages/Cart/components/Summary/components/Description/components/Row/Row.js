import React from 'react';
import { string, number, oneOfType, bool } from 'prop-types';
import { customFormatPrice } from 'utils/project';
import styles from './styles';

const Row = ({ name, value, highlight }) => (
	<styles.Wrapper>
		<styles.Title variant="subtitle2" component="body1">{`${name}:`}</styles.Title>
		<styles.Value variant="subtitle2" component="body1" highlight={highlight}>
			{typeof value === 'string' ? value : customFormatPrice(value / 100)}
		</styles.Value>
	</styles.Wrapper>
);

Row.propTypes = {
	name: string,
	value: oneOfType([string, number]),
	highlight: bool
};

Row.defaultProps = {
	name: '',
	value: '',
	highlight: false
};

export default Row;
