import React from 'react';
import { string } from 'prop-types';
import styles from './styles';

const Logo = ({ text }) => (
	<styles.Wrapper>
		<styles.IconLeft svgName="couponLineL" size={45} />
		<styles.IconCoupon svgName="coupon" size={46} />
		<styles.Text variant="subtitle2" component="body1">
			{text}
		</styles.Text>
		<styles.IconRight svgName="couponLineR" size={45} />
	</styles.Wrapper>
);

Logo.propTypes = {
	text: string
};

Logo.defaultProps = {
	text: ''
};
export default Logo;
