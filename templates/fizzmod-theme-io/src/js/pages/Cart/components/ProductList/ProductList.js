import React from 'react';
import { objectOf, bool, any } from 'prop-types';
import useVtexCheckout from 'hooks/useVtexCheckout';
import styles from './styles';
import Product from '../Product';
import ProductMobile from '../ProductMobile';

const ProductList = ({ isTablet, orderForm, orderSubstitutesActive }) => {
	const { items = [], decrementItem, incrementItem, removeItem, addItem, loading } =
		useVtexCheckout() || {};

	const isLoading = loading === true;

	const dataText = [
		'Producto',
		'Precio',
		'Cantidad',
		'Total',
		orderSubstitutesActive && 'Criterio de reemplazo'
	];

	return (
		<styles.Wrapper>
			{!isTablet && (
				<styles.HeaderGrid>
					{dataText.map((text, i) => (
						<styles.Text key={i.toString()} variant="body2">
							{text}
						</styles.Text>
					))}
				</styles.HeaderGrid>
			)}
			<styles.WrapperList>
				{!isTablet ? (
					<styles.Scrollbars style={{ height: 'calc(100vh - 445px)' }}>
						<styles.List>
							<styles.LoadingWrapper isLoading={isLoading}>
								{items &&
									items.length &&
									items.map((product, idx) => (
										<Product
											{...product}
											key={idx.toString()}
											minusFn={decrementItem(idx)}
											plusFn={incrementItem(idx)}
											deleteFn={removeItem(idx)}
											addFn={qty => addItem(idx, qty)}
											orderForm={orderForm}
											isLoading={isLoading}
											orderSubstitutesActive={orderSubstitutesActive}
										/>
									))}
							</styles.LoadingWrapper>
						</styles.List>
					</styles.Scrollbars>
				) : (
					<styles.List>
						<styles.LoadingWrapper isLoading={isLoading}>
							{items &&
								items.length &&
								items.map((product, idx) => (
									<ProductMobile
										{...product}
										key={idx.toString()}
										minusFn={decrementItem(idx)}
										plusFn={incrementItem(idx)}
										deleteFn={removeItem(idx)}
										addFn={qty => addItem(idx, qty)}
										orderForm={orderForm}
										isLoading={isLoading}
										orderSubstitutesActive={orderSubstitutesActive}
									/>
								))}
						</styles.LoadingWrapper>
					</styles.List>
				)}
			</styles.WrapperList>
		</styles.Wrapper>
	);
};

ProductList.propTypes = {
	isTablet: bool,
	orderForm: objectOf(any).isRequired,
	orderSubstitutesActive: bool
};

ProductList.defaultProps = {
	isTablet: false,
	orderSubstitutesActive: false
};

export default ProductList;
