import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import useDevices from 'hooks/useDevices';
import styles from './styles';
import Form from './components/Form';
import mapDefault from '../../../../redux/storeSelector/config/mapDefault';
import { validateObj } from '../../../../utils/utils';

const GeoSelector = ({ goInit, changeStore, changeStep }) => {
	const [configMap, setConfigMap] = useState(null);
	const { tablet } = useDevices();

	useEffect(() => {
		const defaultCoordBySize = tablet ? { ...mapDefault.mobile } : { ...mapDefault.desktop };
		setConfigMap(defaultCoordBySize);
	}, []);

	return (
		<styles.Wrapper>
			<Form
				goInit={goInit}
				setCoord={setConfigMap}
				changeStore={changeStore}
				changeStep={changeStep}
			/>
			{validateObj(configMap) && (
				<styles.WrapperMap>
					<styles.Map mobile={tablet} draggable {...configMap} />
				</styles.WrapperMap>
			)}
		</styles.Wrapper>
	);
};

GeoSelector.propTypes = {
	goInit: func,
	changeStore: func,
	changeStep: func
};

GeoSelector.defaultProps = {
	goInit: () => {},
	changeStore: {},
	changeStep: {}
};

export default GeoSelector;
