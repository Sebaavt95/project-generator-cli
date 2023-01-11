import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { number, bool } from 'prop-types';
import { saveOrderInfo } from 'redux/substitutes';
import { customFormatPrice } from 'utils/project';
import TermsAndConditions from './components/TermsAndConditions';
import styles from './styles';

const Totals = ({ total, isTablet, isMobile }) => {
	const orderBtn = !isMobile && isTablet && 2;
	const [isChecked, setIsChecked] = useState(false);
	const handleChecked = () => setIsChecked(!isChecked);

	const { substitutes: substitutesFunctions } = useSelector(({ substitutes }) => ({
		substitutes: substitutes.substitutes
	}));

	const goToCheckout = () => {
		if (substitutesFunctions) saveOrderInfo(substitutesFunctions);
		window.location.href = '/checkout#/email';
	};

	return (
		<styles.Wrapper>
			<styles.WrapperText>
				<styles.Text variant="h6" component="body1">
					TOTAL:
				</styles.Text>
				<styles.Text variant="h6" component="body1">
					{customFormatPrice(total / 100)}
				</styles.Text>
			</styles.WrapperText>
			<TermsAndConditions isChecked={isChecked} handleCheck={() => handleChecked()} />
			<styles.Wrapperbtns>
				<styles.Checkout
					onClick={goToCheckout}
					order={orderBtn.toString()}
					variant="contained"
					color="primary"
					disabled={!isChecked}
				>
					finalizar compra
				</styles.Checkout>
				<styles.BuyMore href="./" variant="outlined" color="secondary">
					elegir mas productos
				</styles.BuyMore>
			</styles.Wrapperbtns>
		</styles.Wrapper>
	);
};

Totals.propTypes = {
	total: number,
	isTablet: bool,
	isMobile: bool
};

Totals.defaultProps = {
	total: 0,
	isTablet: false,
	isMobile: false
};

export default Totals;
