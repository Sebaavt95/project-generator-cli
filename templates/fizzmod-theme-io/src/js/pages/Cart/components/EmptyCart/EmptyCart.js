import React from 'react';
import styles from './styles';

const EmptyCart = () => (
	<styles.Wrapper>
		<styles.Inner>
			<styles.EmptyCart svgName="emptyCart" type="illustration" size={122} />
			<styles.WrapperContent>
				<styles.Title variant="subtitle1" component="body1">
					Tu carrito está vacío
				</styles.Title>
				<styles.Text variant="body2">
					Aún no tenes artículos en tu carrito de compra. Hacé Click aca para seguir comprando
				</styles.Text>
				<styles.Button component="a" href="/" variant="contained" color="secondary">
					Elegir productos
				</styles.Button>
			</styles.WrapperContent>
		</styles.Inner>
	</styles.Wrapper>
);

export default EmptyCart;
