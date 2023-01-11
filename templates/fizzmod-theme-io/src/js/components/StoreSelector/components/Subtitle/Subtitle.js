import React from 'react';
import { string } from 'prop-types';
import styles from './styles';

const Subtitle = ({ svgName, text, ...props }) => {
	return (
		<styles.Wrapper {...props}>
			{svgName && <styles.Icon svgName={svgName} size={44} />}
			{text && <styles.Text variant="body2">{text}</styles.Text>}
		</styles.Wrapper>
	);
};

Subtitle.propTypes = {
	svgName: string,
	text: string
};

Subtitle.defaultProps = {
	svgName: '',
	text: ''
};

export default Subtitle;
