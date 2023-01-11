import React from 'react';
import { bool, string } from 'prop-types';
import useSteps from 'hooks/useSteps';
import useDevices from 'hooks/useDevices';
import Minicart from 'components/CheckoutMinicart';
import styles from './styles';

const CheckoutFooter = ({ className, cart }) => {
	const { isCheckout, inPurchase, inPayment } = useSteps();

	const { tablet } = useDevices();
	const actualYear = new Date().getFullYear();

	return (
		<React.Fragment>
			{inPurchase && <Minicart inPayment={inPayment} />}
			<styles.Footer className={className} isCheckout={isCheckout} inPurchase={inPurchase}>
				<styles.Wrapper inPurchase={inPurchase} cart={cart}>
					{tablet && (
						<styles.Secure>
							<styles.Icon svgName="lock" size={34} />
							<styles.SecureText variant="subtitle2" component="body1">
								Compra 100% segura
							</styles.SecureText>
						</styles.Secure>
					)}
					<styles.Disclaimer inPurchase={inPurchase}>
						<styles.Text variant="overline">
							{`© Fizzmod ${actualYear}. Todos los derechos reservados.`}
						</styles.Text>
						<styles.LinksWrapper>
							<styles.Link href="#">
								<styles.LinkText variant="overline">Política de Privacidad</styles.LinkText>
							</styles.Link>
							{` - `}
							<styles.Link href="#">
								<styles.LinkText variant="overline">Términos y Condiciones</styles.LinkText>
							</styles.Link>
						</styles.LinksWrapper>
					</styles.Disclaimer>
					<styles.Brands inPurchase={inPurchase}>
						<styles.Link href="https://vtex.com" target="_blank" rel="noopener noreferrer">
							<styles.Vtex svgName="vtex" size={75} type={cart ? 'illustration' : 'icon'} />
						</styles.Link>
						<styles.Link href="https://fizzmod.com" target="_blank" rel="noopener noreferrer">
							<styles.Fizzmod svgName="fizzmod" size={106} type={cart ? 'illustration' : 'icon'} />
						</styles.Link>
					</styles.Brands>
				</styles.Wrapper>
			</styles.Footer>
		</React.Fragment>
	);
};

CheckoutFooter.propTypes = {
	className: string,
	cart: bool
};

CheckoutFooter.defaultProps = {
	className: '',
	cart: false
};

export default CheckoutFooter;
