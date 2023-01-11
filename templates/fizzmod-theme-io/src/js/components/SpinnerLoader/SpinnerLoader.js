import React from 'react';
import styles from './styles';

const SpinnerLoader = () => {
	return (
		<styles.StyledSpinner viewBox="0 0 50 50">
			<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
		</styles.StyledSpinner>
	);
};

export default SpinnerLoader;
