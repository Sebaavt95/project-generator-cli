import React from 'react';
import { func } from 'prop-types';
import styles from './styles';
import BtnSelector from './components/BtnSelector';

const tabsSelector = [
	{
		text: 'por domicilio',
		svgName: 'icons/geoPointSelector',
		flow: 'delivery',
		size: 75
	},
	{
		text: 'por tienda',
		svgName: 'icons/storeSelector',
		flow: 'pickup',
		size: 60
	},
	{
		text: 'por código postal',
		svgName: 'icons/postalcode',
		flow: 'zipcode',
		size: 75
	}
];

const DeliverySelector = ({ changeStep }) => {
	return (
		<styles.Wrapper>
			<styles.Head>
				<styles.Title text="Seleccioná tu tienda" />
				<styles.Subtitle text="Por favor, definí una sucursal para verificar que estamos en tu zona" />
			</styles.Head>
			<styles.Content>
				{tabsSelector &&
					tabsSelector.length &&
					tabsSelector.map(tab => (
						<BtnSelector
							key={tab.flow}
							{...tab}
							buttonsQuantity={tabsSelector.length}
							onClick={() => changeStep(tab.flow)}
						/>
					))}
			</styles.Content>
		</styles.Wrapper>
	);
};
DeliverySelector.propTypes = {
	changeStep: func
};
DeliverySelector.defaultProps = {
	changeStep: () => {}
};

export default DeliverySelector;
