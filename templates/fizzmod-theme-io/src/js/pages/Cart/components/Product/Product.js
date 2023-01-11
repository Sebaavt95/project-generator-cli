import React, { useEffect } from 'react';
import { string, number, func, objectOf, any, oneOfType, bool } from 'prop-types';
import { getBestPriceFromSellingPrice, getQuantityToShow } from 'utils/project';
import useEditableQuantity from 'hooks/useEditableQuantity';
import styles from './styles';
import Description from './components/Description';
import Prices from './components/Prices';
import Total from './components/Total';
import ProductSubstitutes from '../ProductSubstitutes';

const Product = ({
	id,
	name,
	quantity,
	detailUrl,
	additionalInfo,
	price,
	listPrice,
	sellingPrice,
	imageUrl,
	unitMultiplier,
	measurementUnit,
	minusFn,
	plusFn,
	deleteFn,
	addFn,
	isLoading,
	orderSubstitutesActive
}) => {
	const { brandName = '' } = additionalInfo;

	const bestPrice = getBestPriceFromSellingPrice(sellingPrice, unitMultiplier);
	const totalPrice = bestPrice * quantity * unitMultiplier;

	const {
		focusFn,
		blurFn,
		changeFn,
		isFocus,
		quantity: customQuantity,
		setCustomQuantity
	} = useEditableQuantity(quantity);

	useEffect(() => {
		setCustomQuantity(quantity);
	}, [quantity]);

	const quantityString = getQuantityToShow({
		quantity,
		unitMultiplier,
		measurementUnit
	});

	const handleBlur = () => {
		blurFn();

		if (customQuantity === quantity || customQuantity < 1) return;

		addFn(customQuantity)();
	};

	return (
		<styles.Wrapper>
			<Description brand={brandName} detailUrl={detailUrl} name={name} imageUrl={imageUrl} />
			<Prices
				listPrice={listPrice}
				bestPrice={bestPrice}
				price={price}
				unitMultiplier={unitMultiplier}
				measurementUnit={measurementUnit}
			/>
			<styles.QuantitySelector
				value={isFocus || isLoading ? customQuantity : quantityString}
				handleMinus={minusFn}
				handlePlus={plusFn}
				handleFocus={focusFn}
				handleBlur={handleBlur}
				handleChange={changeFn}
				buttonsWidth={45}
				height={38}
				minusProps={{
					disabled: quantity <= 1
				}}
			/>
			<styles.WrapperTotal>
				<Total total={totalPrice} />
			</styles.WrapperTotal>
			{orderSubstitutesActive && <ProductSubstitutes id={id} />}
			<styles.DeleteIcon nameicon="trash" variant="pure-icon" size={23} onClick={deleteFn} />
		</styles.Wrapper>
	);
};

Product.propTypes = {
	quantity: number,
	name: string,
	imageUrl: string,
	minusFn: func,
	plusFn: func,
	deleteFn: func,
	addFn: func,
	additionalInfo: objectOf(any),
	listPrice: number,
	price: number,
	detailUrl: string,
	sellingPrice: number.isRequired,
	unitMultiplier: number,
	measurementUnit: string,
	id: oneOfType([number, string]).isRequired,
	isLoading: bool,
	orderSubstitutesActive: bool
};

Product.defaultProps = {
	quantity: 0,
	name: '',
	imageUrl: '',
	minusFn: () => {},
	plusFn: () => {},
	addFn: () => {},
	deleteFn: () => {},
	additionalInfo: {},
	listPrice: 0,
	price: 0,
	detailUrl: '',
	unitMultiplier: 1,
	measurementUnit: 'un',
	isLoading: false,
	orderSubstitutesActive: false
};

export default Product;
