import React, { useState, useEffect, useCallback } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import useDevices from 'hooks/useDevices';
import geoConfig from 'redux/storeSelector/config/geoConfig';
import { hasStreetNumber, storesManager } from 'redux/storeSelector/utils';
import { debounce, validateObj } from 'utils';
import { func, objectOf, any } from 'prop-types';
import styles from './styles';
import ScNotFound from '../ScNotFound';

const { searchOptions } = geoConfig;

const Form = ({ goInit, setCoord, changeStore, changeStep }) => {
	const [address, setAddress] = useState('');
	const [streetNumber, setStreetNumber] = useState('');
	const [hasNumber, setHasNumber] = useState(true);
	const [scNotFound, setScNotFound] = useState(false);
	const [selectedCoord, setSelectedCoord] = useState(null);
	const { tabletLg } = useDevices();

	const handleOnChangeAddress = value => {
		setStreetNumber('');
		setAddress(value);
	};

	const handleClickSubmit = async () => {
		if (!validateObj(selectedCoord)) return setScNotFound(true);
		const storesSelectorManager = await storesManager();
		const userGeo = {
			geoCoordinates: [selectedCoord.lng, selectedCoord.lat]
		};
		const stores = storesSelectorManager.findStore(userGeo);
		if (!stores.length) return setScNotFound(true);
		if (stores.length > 1) {
			// code for cases where there's more than one store for a geo.
		} else {
			// eslint-disable-next-line no-return-assign
			changeStore({ salesChannel: stores[0].sc, storeId: stores[0].id });
		}
	};

	const handleSelect = valueSelected => {
		setStreetNumber('');
		setHasNumber(true);
		setAddress(valueSelected);
		geocodeByAddress(valueSelected)
			.then(results => {
				setHasNumber(hasStreetNumber(results));
				return getLatLng(results[0]);
			})
			.then(latLng => {
				setSelectedCoord(latLng);
				setCoord({ ...latLng, isMarkerShown: true, zoom: 15 });
			})
			.catch(error => console.error('Error', error));
	};

	const handleOnChangeStreetNumber = event => {
		const {
			target: { value }
		} = event;
		setStreetNumber(value);
	};

	const searchWithStreetNumber = useCallback(
		debounce(
			value =>
				geocodeByAddress(value)
					.then(results => getLatLng(results[0]))
					.then(latLng => {
						setSelectedCoord(latLng);
						setCoord({ ...latLng, isMarkerShown: true, zoom: 15 });
					})
					.catch(error => console.error('Error', error)),
			300
		)
	);

	const handleSearchAddress = () => {
		setScNotFound(false);
		setAddress('');
	};

	const handleFindStore = () => changeStep('pickup');

	useEffect(() => {
		if (!address) return;
		const splitStreet = address.split(',');
		if (!splitStreet.length) return;
		const [street, ...rest] = splitStreet;
		if (!street) return handleSelect(address);
		const streetJoin = `${street} ${streetNumber}, ${rest}`;
		searchWithStreetNumber(streetJoin);
	}, [streetNumber]);

	return (
		<styles.Wrapper>
			<styles.Head>
				<styles.Icon svgName="icons/geoPointSelector" size={tabletLg ? 28 : 30} />
				<styles.Title variant="h6" component="body1">
					Por dirección
				</styles.Title>
				<styles.GoBack onClick={goInit} />
			</styles.Head>
			<styles.Content>
				{!scNotFound ? (
					<PlacesAutocomplete
						value={address}
						onChange={handleOnChangeAddress}
						onSelect={handleSelect}
						debounce={300}
						searchOptions={searchOptions}
					>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
							<styles.WrapperAutoComplete>
								<styles.InputAddress
									{...getInputProps()}
									name="domicilio"
									label="Dirección *"
									placeholder="Dirección"
									type="text"
								/>
								{!!suggestions && !!suggestions.length && (
									<styles.SearchResultsWrapper>
										<styles.SearchResults
											autoHeight
											autoHeightMax={114}
											renderView={props => <div {...props} className="view" />}
										>
											{loading ? (
												<styles.Loading />
											) : (
												suggestions.map((suggestion, i) => {
													return (
														<div key={i.toString()} {...getSuggestionItemProps(suggestion)}>
															<styles.SearhResult text={suggestion.description} />
														</div>
													);
												})
											)}
										</styles.SearchResults>
									</styles.SearchResultsWrapper>
								)}
							</styles.WrapperAutoComplete>
						)}
					</PlacesAutocomplete>
				) : (
					<ScNotFound handleSearchAddress={handleSearchAddress} handleFindStore={handleFindStore} />
				)}

				{!hasNumber && !scNotFound && (
					<styles.InputStreetNumber
						value={streetNumber}
						name="datos adicionales"
						label="Numero *"
						placeholder="Ingrese numero"
						type="text"
						onChange={handleOnChangeStreetNumber}
					/>
				)}
				{!scNotFound && (
					<styles.Button
						color="primary"
						variant="contained"
						disabled={!selectedCoord || (!hasNumber && !streetNumber)}
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
	setCoord: func,
	changeStore: func,
	changeStep: func,
	salesChannelManager: objectOf(any)
};

Form.defaultProps = {
	goInit: () => {},
	setCoord: () => {},
	changeStore: () => {},
	changeStep: () => {},
	salesChannelManager: {}
};

export default Form;
