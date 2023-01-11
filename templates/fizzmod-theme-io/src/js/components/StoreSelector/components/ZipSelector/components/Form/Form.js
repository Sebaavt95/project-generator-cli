import React, { useState } from 'react';
import { func } from 'prop-types';
import useDevices from 'hooks/useDevices';
import { storesManager } from 'redux/storeSelector/utils';
import styles from './styles';
import ScNotFound from '../ScNotFound';
import { validateNumber } from '../../../../../../utils/utils';

const Form = ({ goInit, changeStore, changeStep }) => {
	const [scNotFound, setScNotFound] = useState(false);
	const [zipCode, setZipCode] = useState('');
	const { tabletLg } = useDevices();

	const handleClickSubmit = async () => {
		const storesSelectorManager = await storesManager();
		const stores = storesSelectorManager.findStore({ postalCode: zipCode });
		if (!stores.length) return setScNotFound(true);
		if (stores.length > 1) {
			// code for cases where there's more than one store for a geo.
		} else {
			// eslint-disable-next-line no-return-assign
			changeStore({ salesChannel: stores[0].sc, storeId: stores[0].id });
		}
	};

	const handleOnChangeZipCode = event => {
		const {
			target: { value }
		} = event;
		const zipCodeNumber = parseInt(value, 10);
		if (validateNumber(zipCodeNumber)) setZipCode(zipCodeNumber);
		// eslint-disable-next-line no-restricted-globals
		if (isNaN(zipCodeNumber)) setZipCode('');
	};

	const handleSearchAddress = () => {
		setScNotFound(false);
		setZipCode('');
	};

	const handleFindStore = () => changeStep('pickup');

	return (
		<styles.Wrapper>
			<styles.Head>
				<styles.Icon svgName="icons/postalcode" size={tabletLg ? 28 : 30} />
				<styles.Title variant="h6" component="body1">
					Código Postal
				</styles.Title>
				<styles.GoBack onClick={goInit} />
			</styles.Head>
			<styles.Content>
				{!scNotFound ? (
					<styles.InputZipCode
						value={zipCode}
						name=""
						label="Ingrese el código postal *"
						placeholder="Ej: 1414"
						type="text"
						onChange={handleOnChangeZipCode}
					/>
				) : (
					<ScNotFound handleSearchAddress={handleSearchAddress} handleFindStore={handleFindStore} />
				)}
				{!scNotFound && (
					<styles.Button
						color="primary"
						variant="contained"
						disabled={!zipCode}
						onClick={handleClickSubmit}
					>
						confirmar
					</styles.Button>
				)}
			</styles.Content>
		</styles.Wrapper>
	);
};

Form.propTypes = {
	goInit: func,
	changeStore: func,
	changeStep: func
};

Form.defaultProps = {
	goInit: () => {},
	changeStore: () => {},
	changeStep: () => {}
};

export default Form;
