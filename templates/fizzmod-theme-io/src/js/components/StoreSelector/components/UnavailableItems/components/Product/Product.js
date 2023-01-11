import React from 'react';
import { string, objectOf, any, number } from 'prop-types';
import { getResizedImage } from '@fizzmod/utils';
import { splitText } from 'utils';
import useDevices from 'hooks/useDevices';
import styles from './styles';

const Product = ({ name, imageUrl, additionalInfo, price, listPrice, sellingPrice }) => {
	const { tablet } = useDevices();
	const { brandName = '' } = additionalInfo || {};
	const correctPrice = sellingPrice !== price ? sellingPrice : price;
	return (
		<styles.Wrapper>
			<styles.Image src={getResizedImage(imageUrl, 75, 75)} />
			<styles.Description>
				{brandName && (
					<styles.Brand variant="caption" component="body1">
						{brandName}
					</styles.Brand>
				)}
				<styles.Name variant="body2">{splitText(name, 50)}</styles.Name>
				{tablet && (
					<styles.Prices>
						{listPrice && (
							<styles.ListPrice value={listPrice} variant="subtitle2" component="body1" />
						)}
						<styles.Price value={correctPrice} variant="subtitle2" component="body1" />
					</styles.Prices>
				)}
			</styles.Description>
			{!tablet && (
				<styles.Prices>
					{listPrice && (
						<styles.ListPrice value={listPrice} variant="subtitle2" component="body1" />
					)}
					<styles.Price value={correctPrice} variant="subtitle2" component="body1" />
				</styles.Prices>
			)}
		</styles.Wrapper>
	);
};

Product.propTypes = {
	name: string.isRequired,
	imageUrl: string.isRequired,
	additionalInfo: objectOf(any),
	listPrice: number.isRequired,
	price: number.isRequired,
	sellingPrice: number.isRequired
};

Product.defaultProps = {
	additionalInfo: {}
};

export default Product;
