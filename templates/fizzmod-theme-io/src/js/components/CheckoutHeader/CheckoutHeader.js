import React from 'react';
import { string } from 'prop-types';
import useSteps from 'hooks/useSteps';
import useDevices from 'hooks/useDevices';
import PurchaseFlow from './components/PurchaseFlow';
import styles from './styles';

const CheckoutHeader = ({ className }) => {
	const { isCheckout, currentStep } = useSteps();

	const { tablet } = useDevices();

	return (
		<React.Fragment>
			<styles.Header className={className}>
				<styles.Wrapper>
					<styles.Title>
						<styles.Link href="/">
							<styles.Icon svgName="logo" size={tablet ? 137 : 154} color="#fff" />
						</styles.Link>
					</styles.Title>
					{!tablet && (
						<styles.Secure>
							<styles.Icon svgName="lock" size={34} color="#fff" />
							<styles.Text variant="caption">Compra 100% segura</styles.Text>
						</styles.Secure>
					)}
				</styles.Wrapper>
			</styles.Header>
			{isCheckout && <PurchaseFlow currentStep={currentStep} emailStep={currentStep === 'email'} />}
		</React.Fragment>
	);
};

CheckoutHeader.propTypes = {
	className: string
};

CheckoutHeader.defaultProps = {
	className: ''
};

export default CheckoutHeader;
