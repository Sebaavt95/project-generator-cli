import React from 'react';
import { func } from 'prop-types';
import styles from './styles';

const GoBack = ({ onClick, ...props }) => {
	return (
		<styles.Button disableRipple onClick={onClick} {...props}>
			<styles.Icon svgName="icons/arrow-left" size={14} />
			volver
		</styles.Button>
	);
};

GoBack.propTypes = {
	onClick: func
};

GoBack.defaultProps = {
	onClick: () => {}
};

export default GoBack;
