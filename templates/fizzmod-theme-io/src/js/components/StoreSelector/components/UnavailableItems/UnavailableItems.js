import React from 'react';
import { object, func, objectOf } from 'prop-types';
import { validateArr, validateObj } from 'utils';
import styles from './styles';
import Product from './components/Product';

const UnavailableItems = ({ unavailableData, changeStore, goInit }) => {
	if (!validateObj(unavailableData)) return null;
	const { items, sc } = unavailableData;
	if (!validateArr(items) || !sc) return null;

	const handleClickConfirm = () => changeStore(sc, true);
	const handleClickChangeStep = () => goInit();
	return (
		<styles.Wrapper>
			<styles.Head>
				<styles.Title text="¡Atención!" />
				<styles.Subtitle text="Al cambiar de tienda, los siguientes artículos no los tenemos disponibles para la entrega. Elegí alguna de las dos opciones para continuar con tu compra" />
			</styles.Head>
			<styles.Content>
				<styles.ProductsList>
					<styles.ProductsScroll style={{ height: '204px' }}>
						{items.map(item => (
							<Product {...item} />
						))}
					</styles.ProductsScroll>
				</styles.ProductsList>
				<styles.WrapperButtons>
					<styles.ButtonChangeStore
						onClick={handleClickChangeStep}
						color="primary"
						variant="outlined"
					>
						volver
					</styles.ButtonChangeStore>
					<styles.ButtonConfirm onClick={handleClickConfirm} color="primary" variant="contained">
						continuar sin los productos
					</styles.ButtonConfirm>
				</styles.WrapperButtons>
			</styles.Content>
		</styles.Wrapper>
	);
};

UnavailableItems.propTypes = {
	unavailableData: objectOf(object),
	goInit: func,
	changeStore: func
};

UnavailableItems.defaultProps = {
	unavailableData: {},
	changeStore: () => {},
	goInit: () => {}
};

export default UnavailableItems;
