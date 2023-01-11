import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentCheckoutStep } from 'utils';

const useSteps = () => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [currentStep, setCurrentStep] = useState(null);
	const [inPurchase, setInPurchase] = useState(false);
	const [inPayment, setInPayment] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const step = getCurrentCheckoutStep(location);
		setCurrentStep(step);

		if (currentStep && currentStep !== 'cart') setIsCheckout(true);
		else setIsCheckout(false);

		const isPurchase = step !== 'email' && step !== 'cart';
		const isPayment = step === 'payment';

		setInPurchase(isPurchase);
		setInPayment(isPayment);
	}, [location, currentStep]);

	return {
		isCheckout,
		currentStep,
		inPurchase,
		inPayment
	};
};

export default useSteps;
