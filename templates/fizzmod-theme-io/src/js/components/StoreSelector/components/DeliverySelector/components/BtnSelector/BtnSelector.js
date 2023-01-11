import React from 'react';
import { string, func, number } from 'prop-types';
import styles from './styles';

const BtnSelector = ({ svgName, text, size, onClick, buttonsQuantity }) => {
	return (
		<styles.Wrapper onClick={onClick} quantity={buttonsQuantity}>
			{svgName && <styles.Icon className="svg-icon" svgName={svgName} size={size} />}
			<styles.Text variant="subtitle2" component="body1">
				{text}
			</styles.Text>
		</styles.Wrapper>
	);
};

BtnSelector.propTypes = {
	svgName: string,
	text: string,
	size: number,
	buttonsQuantity: number,
	onClick: func
};

BtnSelector.defaultProps = {
	svgName: '',
	text: '',
	size: 50,
	buttonsQuantity: 3,
	onClick: () => {}
};

export default BtnSelector;
