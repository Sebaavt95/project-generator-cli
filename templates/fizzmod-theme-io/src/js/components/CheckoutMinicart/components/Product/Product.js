import React from 'react';
import { string, number } from 'prop-types';
import { getBestPriceFromSellingPrice, getQuantityToShow, showListPrice, textPriceToNumber  } from 'utils/project';
import { getResizedImage } from '@fizzmod/utils';
import styles from './styles';

const Product = ({
	quantity,
	detailUrl,
	name,
	listPrice,
	sellingPrice,
	imageUrl,
	unitMultiplier,
	measurementUnit,
	availability
}) => {
	const bestPrice = getBestPriceFromSellingPrice(sellingPrice, unitMultiplier);
	const hasListPrice = showListPrice(textPriceToNumber(listPrice), textPriceToNumber(bestPrice))
	const quantityString = getQuantityToShow({
		quantity,
		unitMultiplier,
		measurementUnit
	});
	const unavailableTexts = {
		cannotBeDelivered: 'Este producto no se puede entregar a esta dirección.',
		withoutStock: 'Este producto no está disponible actualmente.'
	};

	return (
		<styles.Product>
			<styles.ImageWrapper href={detailUrl}>
				<styles.Image src={getResizedImage(imageUrl, 65, 65)} />
			</styles.ImageWrapper>
			<styles.InfoWrapper>
				<styles.Name variant="caption">{name}</styles.Name>
				<styles.Quantity variant="caption">Cantidad : {quantityString}</styles.Quantity>
				<styles.Prices>

					{hasListPrice && <styles.ListPrice value={listPrice} variant="subtitle2" component="caption" />}
					<styles.BestPrice value={bestPrice} variant="subtitle2" component="caption" />
				</styles.Prices>
			</styles.InfoWrapper>
			{!!unavailableTexts[availability] && (
				<styles.UnavailableWrapper>
					<styles.Arrow />
					<styles.Icon svgName="alert" size={12} />
					<styles.UnavailableText variant="overline">
						{unavailableTexts[availability]}
					</styles.UnavailableText>
				</styles.UnavailableWrapper>
			)}
		</styles.Product>
	);
};

Product.propTypes = {
	quantity: number,
	name: string,
	availability: string,
	imageUrl: string,
	listPrice: number,
	detailUrl: string,
	sellingPrice: number.isRequired,
	unitMultiplier: number,
	measurementUnit: string
};

Product.defaultProps = {
	quantity: 0,
	name: '',
	availability: '',
	imageUrl: '',
	listPrice: 0,
	detailUrl: '',
	unitMultiplier: 1,
	measurementUnit: 'un'
};

export default Product;
