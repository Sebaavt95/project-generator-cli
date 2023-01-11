import React, { useEffect } from 'react';
import { string, number, func, oneOfType, objectOf, any, arrayOf, bool } from 'prop-types';
import { getBestPriceFromSellingPrice, getQuantityToShow } from 'utils/project';
import { getResizedImage } from '@fizzmod/utils';
import useEditableQuantity from 'hooks/useEditableQuantity';
import styles from './styles';

const Product = ({
	id,
	name,
	quantity,
	additionalInfo,
	price,
	listPrice,
	sellingPrice,
	imageUrl,
	unitMultiplier,
	measurementUnit,
	measurementsToHide,
	minusFn,
	plusFn,
	deleteFn,
	addFn,
	orderForm,
	isLoading,
	orderSubstitutesActive,
	...rest
}) => {
	const { brandName = '' } = additionalInfo;

	const bestPrice = getBestPriceFromSellingPrice(sellingPrice, unitMultiplier);

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
		<styles.Product {...rest}>
			<styles.Head>
				<styles.WrapperTitle>
					<styles.Brand variant="caption" component="body1">
						{brandName}
					</styles.Brand>
					<styles.Title variant="subtitle2" component="h4">
						{name}
					</styles.Title>
				</styles.WrapperTitle>
				<styles.DeleteIcon onClick={deleteFn} nameicon="trash" variant="pure-icon" size={23} />
			</styles.Head>
			<styles.Content>
				<styles.ImageWrapper>
					<styles.Image src={getResizedImage(imageUrl, 70, 70)} />
				</styles.ImageWrapper>
				<styles.Totals>
					<styles.QuantitySelector
						value={isFocus || isLoading ? customQuantity : quantityString}
						handleMinus={minusFn}
						handlePlus={plusFn}
						handleFocus={focusFn}
						handleBlur={handleBlur}
						handleChange={changeFn}
						buttonsWidth={45}
						height={45}
						minusProps={{
							disabled: quantity <= 1
						}}
					/>
					<styles.PriceWrapper>
						<styles.BestPrice
							value={bestPrice}
							unitMultiplier={unitMultiplier}
							measurementUnit={measurementUnit}
							variant="subtitle2"
							component="body1"
						/>
						<styles.PPUMPrice
							value={bestPrice}
							unitMultiplier={unitMultiplier}
							measurementUnit={measurementUnit}
						/>
					</styles.PriceWrapper>
				</styles.Totals>
			</styles.Content>
			{orderSubstitutesActive && (
				<styles.ActionsWrapper>
					<styles.SubstituteTitle variant="overline">
						Criterio de reemplazo para este producto:
					</styles.SubstituteTitle>
					<styles.ProductSubstitutes id={id} />
				</styles.ActionsWrapper>
			)}
		</styles.Product>
	);
};

Product.propTypes = {
	name: string.isRequired,
	imageUrl: string.isRequired,
	listPrice: number.isRequired,
	price: number.isRequired,
	deleteFn: func,
	minusFn: func,
	plusFn: func,
	addFn: func,
	additionalInfo: objectOf(any).isRequired,
	quantity: oneOfType([number, string]).isRequired,
	unitMultiplier: number,
	measurementUnit: string,
	measurementsToHide: arrayOf(string),
	sellingPrice: number.isRequired,
	id: oneOfType([number, string]).isRequired,
	orderForm: objectOf(any).isRequired,
	isLoading: bool,
	orderSubstitutesActive: bool
};

Product.defaultProps = {
	deleteFn: () => {},
	minusFn: () => {},
	plusFn: () => {},
	addFn: () => {},
	unitMultiplier: 1,
	measurementUnit: 'un',
	measurementsToHide: ['un'],
	isLoading: false,
	orderSubstitutesActive: false
};

export default Product;
