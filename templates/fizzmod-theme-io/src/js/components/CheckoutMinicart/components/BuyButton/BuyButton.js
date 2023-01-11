import React, { useEffect, useState } from 'react';
import setObserver from '@fizzmod/mutationobserver-generator';
import styles from './styles';

const BuyButton = () => {
	const [disabled, setDisabled] = useState(null);

	const vtexBtnSelector = '.payment-submit-wrap button#payment-data-submit:last-child';

	const handleClick = () => {
		const vtexBuyBtn = document.querySelector(vtexBtnSelector);
		if (!vtexBuyBtn) return;
		vtexBuyBtn.click();
	};

	const callbackObserver = mutationList => {
		mutationList.forEach(elem => {
			const { target, attributeName } = elem;
			if (!target || !attributeName || attributeName !== 'disabled') return;
			if (target.disabled) setDisabled(true);
			else setDisabled(false);
		});
	};

	useEffect(() => {
		const observer = setObserver(vtexBtnSelector, callbackObserver, {
			attributes: true,
			subtree: false,
			childList: false
		});

		return () => observer.disconnect();
	}, []);

	return (
		<styles.Wrapper>
			<styles.Button variant="contained" color="primary" disabled={disabled} onClick={handleClick}>
				<styles.Text variant="subtitle2" component="caption">
					Comprar ahora
				</styles.Text>
			</styles.Button>
		</styles.Wrapper>
	);
};

export default BuyButton;
