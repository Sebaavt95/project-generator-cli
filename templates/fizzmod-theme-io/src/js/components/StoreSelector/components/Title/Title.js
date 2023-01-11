import React from 'react';
import { string } from 'prop-types';
import styles from './styles';

const Title = ({ svgName, text, ...props }) => {
	return (
		<styles.Wrapper {...props}>
			{svgName && <styles.Icon svgName={svgName} size={31} />}
			{text && (
				<styles.Text variant="h5" component="body1">
					{text}
				</styles.Text>
			)}
		</styles.Wrapper>
	);
};

Title.propTypes = {
	svgName: string,
	text: string
};

Title.defaultProps = {
	svgName: '',
	text: ''
};

export default Title;
