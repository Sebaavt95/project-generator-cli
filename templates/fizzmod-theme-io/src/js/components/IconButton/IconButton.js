import React from 'react';
import { string, oneOf, number, bool } from 'prop-types';
import Svg from 'components/Svg';
import styles from './styles';

const IconButton = ({ nameicon, size, color, type, secondaryActive, ...rest }) => (
	<styles.IconButton {...rest}>
		<Svg svgName={nameicon} size={size} color={color} type={type} />
	</styles.IconButton>
);

IconButton.propTypes = {
	variant: oneOf(['square', 'pure-icon']),
	nameicon: string,
	size: number,
	secondaryActive: bool,
	color: string,
	type: oneOf(['icon', 'illustration'])
};

IconButton.defaultProps = {
	variant: 'square',
	nameicon: '',
	size: 16,
	secondaryActive: false,
	color: 'inherit',
	type: 'icon'
};

export default IconButton;
