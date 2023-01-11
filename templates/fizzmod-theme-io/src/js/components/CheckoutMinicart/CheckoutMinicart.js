import React from 'react';
import { oneOfType, string, number, bool } from 'prop-types';
import useDevices from 'hooks/useDevices';
import { useSelector } from 'react-redux';
import { validateArr } from 'utils';
import Product from './components/Product';
import Totalizer from './components/Totalizer';
import BuyButton from './components/BuyButton';
import styles from './styles';

const CheckoutMinicart = ({ inPayment }) => {
	const { tablet } = useDevices();
	const { items: products, totalizers, value: total } = useSelector(
		({ orderForm: { data } }) => data
	);

	const parsedTotalizers =
		(validateArr(totalizers) && [...totalizers, { id: 'Total', value: total }]) || [];

	return (
		<styles.Minicart>
			<styles.Container>
				<styles.Header>
					<styles.Title variant="h6" component="h2">
						Resumen de la compra
					</styles.Title>
				</styles.Header>
				<styles.Products>
					<styles.ProductsList>
						{validateArr(products) &&
							products.map(product => {
								return <Product key={product.id} {...product} />;
							})}
					</styles.ProductsList>
				</styles.Products>
				<styles.Totalizers>
					<styles.Wrapper>
						{validateArr(parsedTotalizers) &&
							parsedTotalizers.map(totalizer => {
								return <Totalizer key={totalizer.id} {...totalizer} />;
							})}
					</styles.Wrapper>
				</styles.Totalizers>
				{inPayment ? (
					<BuyButton />
				) : (
					<styles.GoToCart href="/checkout#/cart" variant={tablet ? 'outlined' : 'text'}>
						{!tablet && <styles.Icon svgName="angleLeft" size={14} />}
						<styles.Text variant="caption">Volver al carrito</styles.Text>
					</styles.GoToCart>
				)}
			</styles.Container>
		</styles.Minicart>
	);
};

CheckoutMinicart.propTypes = {
	currentStep: oneOfType([string, number]),
	inPayment: bool
};

CheckoutMinicart.defaultProps = {
	currentStep: null,
	inPayment: false
};

export default CheckoutMinicart;
