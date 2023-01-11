import React, { useState, useEffect } from 'react';
import { func, arrayOf, number, shape, string } from 'prop-types';
import useDevices from 'hooks/useDevices';
import styles from './styles';
import Form from './components/Form';
import { validateObj } from '../../../../utils/utils';
import mapDefault from '../../../../redux/storeSelector/config/mapDefault';

const StateSelector = ({ goInit, changeStore, changeStep, states, searchState, stores }) => {
	const statesOptions = states.map(value => ({ value: value.name, label: value.name, ...value }));
	const storesOptions = stores.map(value => ({
		value: value.name,
		label: value.name,
		lat: value.latitude,
		lng: value.longitude,
		...value
	}));

	const [stateSelected, setStateSelected] =
		statesOptions.length === 1 ? useState(statesOptions[0]) : useState(null);
	const [storeSelected, setStoreSelected] =
		storesOptions.length === 1 ? useState(storesOptions[0]) : useState(null);
	const [selectedCoord, setSelectedCoord] = useState(null);
	const [selectFocus, setSelectFocus] = useState(false);
	if (!states || !states.length) return null;

	const StoreSelectDisabled = !stores || !stores.length;
	const [configMap, setConfigMap] = useState(null);
	const { tablet } = useDevices();

	const handleChangeSate = option => {
		setStoreSelected(null);
		setSelectedCoord(null);
		setStateSelected(option);
		searchState(option.value);
		setSelectFocus(false);
		if (option.lat && option.lng) {
			setSelectedCoord({ lat: option.lat, lng: option.lng, zoom: 10 });
		}
	};
	const handleChangeStores = option => {
		setStoreSelected(option);
		setSelectFocus(false);
		if (option && option.lat && option.lng) {
			setSelectedCoord({ lat: option.lat, lng: option.lng, zoom: 15 });
		}
	};
	const handleClickSubmit = () => {
		if (!storeSelected || !storeSelected.sc) return null;
		changeStore({ salesChannel: storeSelected.sc, storeId: storeSelected.id });
	};

	useEffect(() => {
		const defaultCoordBySize = tablet ? { ...mapDefault.mobile } : { ...mapDefault.desktop };
		setConfigMap(defaultCoordBySize);
	}, []);

	useEffect(() => {
		if (validateObj(selectedCoord)) {
			setConfigMap(selectedCoord);
		}
	}, [selectedCoord]);

	useEffect(() => {
		if (storesOptions.length === 1) {
			const singleStore = storesOptions[0];
			setStoreSelected(singleStore);
			setSelectedCoord({ lat: singleStore.lat, lng: singleStore.lng, zoom: 15 });
		}
	}, [stores]);

	return (
		<styles.Wrapper>
			<Form
				goInit={goInit}
				setCoord={setConfigMap}
				changeStore={changeStore}
				changeStep={changeStep}
				stateSelected={stateSelected}
				handleChangeSate={handleChangeSate}
				statesOptions={statesOptions}
				StoreSelectDisabled={StoreSelectDisabled}
				storeSelected={storeSelected}
				handleChangeStores={handleChangeStores}
				storesOptions={storesOptions}
				handleClickSubmit={handleClickSubmit}
				setSelectFocus={setSelectFocus}
			/>
			{validateObj(configMap) && (
				<styles.WrapperMap selectFocus={selectFocus}>
					<styles.Map mobile={tablet} draggable {...configMap} />
				</styles.WrapperMap>
			)}
		</styles.Wrapper>
	);
};

StateSelector.propTypes = {
	goInit: func,
	changeStore: func,
	changeStep: func,
	searchState: func,
	states: arrayOf(
		shape({
			name: string,
			stores: arrayOf(number)
		})
	),
	stores: arrayOf(
		shape({
			id: number,
			sc: number,
			name: string
		})
	),
	store: shape({
		id: number,
		sc: number,
		name: string
	})
};

StateSelector.defaultProps = {
	goInit: () => {},
	changeStore: {},
	changeStep: {},
	searchState: () => {},
	states: [],
	stores: [],
	store: {}
};

export default StateSelector;
