import React from 'react';
import styles from './styles';

const Header = () => (
	<styles.Wrapper>
		<>
			<styles.Icon svgName="cartFull" size={40} />
			<styles.Text variant="h6" component="body1">
				Mi carrito
			</styles.Text>
		</>
	</styles.Wrapper>
);

export default Header;
