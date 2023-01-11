import React from 'react';
import { string, bool, func } from 'prop-types';

import StateSelector from '../StateSelector';
import UnavailableItems from '../UnavailableItems';
import DeliverySelector from '../DeliverySelector';
import GeoSelector from '../GeoSelector';
import ZipSelector from '../ZipSelector';
import Success from '../Success';
import styles from './styles';

const MESSAGES = {
	selectLocation: '',
	footerClarification: ''
};

const StoreSelector = ({ open, handleClose: closePopUp, goInit, step }) => {
	let stepComponent = null;

	switch (step) {
		case 'init':
			stepComponent = <DeliverySelector />;
			break;
		case 'pickup':
			stepComponent = <StateSelector />;
			break;
		case 'delivery':
			stepComponent = <GeoSelector />;
			break;
		case 'zipcode':
			stepComponent = <ZipSelector />;
			break;
		case 'unavailableItems':
			stepComponent = <UnavailableItems />;
			break;
		default:
			stepComponent = <StateSelector />;
			break;
	}
	const handleClose = () => {
		goInit();
		closePopUp();
	};

	if (step === 'success') return <Success handleClose={handleClose} open={open} />;

	return (
		<styles.StoreSelectorPopup onClose={handleClose} open={open}>
			<styles.Wrapper>
				<styles.CloseButton
					nameicon="icons/crossSmall"
					variant="square"
					size={17}
					onClick={handleClose}
				/>
				<styles.Content>{stepComponent}</styles.Content>
				{MESSAGES.footerClarification && (
					<styles.Footer>
						<styles.ExclamationIcon svgName="alert" size={15} />
						<styles.Clarification variant="overline">
							{MESSAGES.footerClarification}
						</styles.Clarification>
					</styles.Footer>
				)}
			</styles.Wrapper>
		</styles.StoreSelectorPopup>
	);
};
StoreSelector.propTypes = {
	handleClose: func.isRequired,
	step: string,
	goInit: func,
	open: bool
};
StoreSelector.defaultProps = {
	open: false,
	step: '',
	goInit: () => {}
};

export default StoreSelector;
