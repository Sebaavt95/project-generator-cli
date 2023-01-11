import React, { useState, useEffect } from 'react';
import styles from './styles';

const CircularLoaderSuccess = ({ ...props }) => {
	const [showIcon, setShowIcon] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowIcon(true);
		}, 2500);
	}, []);

	return (
		<styles.Wrapper {...props}>
			<styles.WrapperCircle width="80px" height="80px" viewBox="0 0 80 80">
				<styles.Circle cx="40" cy="40" r="36" />
			</styles.WrapperCircle>
			<styles.Icon svgName="icons/checkLoading" show={showIcon} size={30} />
		</styles.Wrapper>
	);
};

export default CircularLoaderSuccess;
