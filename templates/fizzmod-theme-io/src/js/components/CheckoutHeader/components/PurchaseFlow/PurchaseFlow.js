import React, { useEffect, useState } from 'react';
import { oneOfType, bool, string, number } from 'prop-types';
import useDevices from 'hooks/useDevices';
import Step from '../Step';
import styles from './styles';

const PurchaseFlow = ({ currentStep, emailStep }) => {
	const [purchaseSteps, setPurchaseSteps] = useState({});

	const { tablet } = useDevices();
	const { state: validatedSteps = {} } = window || {};

	useEffect(() => {
		setPurchaseSteps({ ...validatedSteps, current: currentStep });
	}, [currentStep, validatedSteps]);

	const { current, profile, shipping, payment } = purchaseSteps;

	if (emailStep)
		return (
			<styles.PurchaseFlow emailStep={emailStep}>
				<styles.Wrapper>
					<styles.Title>
						<styles.Icon svgName="goCart" size={40} />
						<styles.Text variant="h6" component="h2">
							Mi carrito
						</styles.Text>
					</styles.Title>
					<styles.GoBack>
						<styles.Link href="/checkout#/cart">
							<styles.Icon svgName="angleLeft" size={14} />
							{!tablet && (
								<styles.Text variant="subtitle2" component="caption">
									Volver al carrito
								</styles.Text>
							)}
						</styles.Link>
					</styles.GoBack>
				</styles.Wrapper>
			</styles.PurchaseFlow>
		);

	return (
		<styles.PurchaseFlow>
			<styles.Wrapper>
				{tablet ? (
					<styles.FinishPurchase>
						<styles.Icon svgName="goCart" size={40} />
						<styles.Text variant="body1" component="caption">
							Finalizar compra
						</styles.Text>
					</styles.FinishPurchase>
				) : (
					<styles.Steps>
						<Step title="Identificación" currentStep={current} step="profile" validated={profile} />
						<Step
							title="Método de Entrega"
							currentStep={current}
							step="shipping"
							validated={shipping}
						/>
						<Step title="Método de Pago" currentStep={current} step="payment" validated={payment} />
					</styles.Steps>
				)}
			</styles.Wrapper>
		</styles.PurchaseFlow>
	);
};

PurchaseFlow.propTypes = {
	currentStep: oneOfType([string, number]),
	emailStep: bool
};

PurchaseFlow.defaultProps = {
	currentStep: null,
	emailStep: false
};

export default PurchaseFlow;
