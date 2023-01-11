import React from 'react';
import { string } from 'prop-types';
import { getResizedImage } from '@fizzmod/utils';
import styles from './styles';

const Description = ({ detailUrl, brand, name, imageUrl }) => (
	<styles.Wrapper>
		<styles.ImageWrapper href={detailUrl}>
			<styles.Image src={getResizedImage(imageUrl, 65, 65)} />
		</styles.ImageWrapper>
		<styles.WrapperText>
			<styles.Brand variant="caption" component="body1">
				{brand}
			</styles.Brand>
			<styles.Name variant="body2" component="h4">
				{name}
			</styles.Name>
		</styles.WrapperText>
	</styles.Wrapper>
);

Description.propTypes = {
	brand: string,
	name: string,
	imageUrl: string,
	detailUrl: string
};

Description.defaultProps = {
	brand: '',
	name: '',
	imageUrl: '',
	detailUrl: ''
};

export default Description;
