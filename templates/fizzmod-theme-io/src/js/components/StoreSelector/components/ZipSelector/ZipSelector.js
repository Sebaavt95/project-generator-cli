import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import useDevices from 'hooks/useDevices';
import styles from './styles';
import Form from './components/Form';
import { validateObj } from '../../../../utils/utils';
import mapDefault from '../../../../redux/storeSelector/config/mapDefault';

const ZipSelector = ({ goInit, changeStore, changeStep }) => {
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

ZipSelector.propTypes = {
	goInit: func,
	changeStore: func,
	changeStep: func
};

ZipSelector.defaultProps = {
	goInit: () => {},
	changeStore: {},
	changeStep: {}
};

export default ZipSelector;
