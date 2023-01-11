import React from 'react';
import { func, arrayOf, bool, string, shape, number } from 'prop-types';
import useDevices from 'hooks/useDevices';
import { validateObj } from 'utils';
import styles from './styles';

const Form = ({
	goInit,
	stateSelected,
	handleChangeSate,
	statesOptions,
	StoreSelectDisabled,
	storeSelected,
	handleChangeStores,
	storesOptions,
	handleClickSubmit,
	setSelectFocus
}) => {
	const enableButton = !validateObj(storeSelected);
	const { tabletLg } = useDevices();
	function handleInputFocus() {
		setSelectFocus(true);
	}
	function handleInputBlur() {
		setSelectFocus(false);
	}
	return (
		<styles.Wrapper>
			<styles.Head>
				<styles.Icon svgName="icons/storeSelector" size={tabletLg ? 28 : 30} />
				<styles.Title variant="h6" component="body1">
					Por Tienda
				</styles.Title>
				<styles.GoBack onClick={goInit} />
			</styles.Head>
			<styles.Content>
				<styles.WrapperSelects>
					<styles.WrapperSelect>
						<styles.Label variant="caption">Provincia *</styles.Label>
						<styles.Select
							name="state"
							id="state"
							value={stateSelected}
							placeholder="Seleccione un Provincia"
							isClearable={false}
							isSearchable
							onChange={handleChangeSate}
							options={statesOptions}
							maxMenuHeight={180}
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
						/>
					</styles.WrapperSelect>
					<styles.WrapperSelect>
						<styles.Label variant="caption">Tienda *</styles.Label>
						<styles.Select
							name="store"
							id="store"
							isDisabled={StoreSelectDisabled}
							value={storeSelected}
							placeholder="Seleccione una tienda"
							isClearable={false}
							isSearchable
							onChange={handleChangeStores}
							options={storesOptions}
							maxMenuHeight={180}
							menuPlacement={tabletLg ? 'top' : 'bottom'}
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
						/>
					</styles.WrapperSelect>
				</styles.WrapperSelects>
				{!StoreSelectDisabled && (
					<styles.Button
						color="primary"
						variant="contained"
						disabled={enableButton}
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
	stateSelected: shape({
		value: string,
		label: string,
		name: string
	}),
	handleChangeSate: func,
	statesOptions: arrayOf(
		shape({
			name: string,
			stores: arrayOf(number)
		})
	),
	StoreSelectDisabled: bool,
	storeSelected: shape({
		value: string,
		label: string,
		name: string
	}),
	handleChangeStores: func,
	storesOptions: arrayOf(
		shape({
			value: string,
			label: string,
			name: string
		})
	),
	handleClickSubmit: func,
	setSelectFocus: bool
};

Form.defaultProps = {
	goInit: () => {},
	stateSelected: {},
	handleChangeSate: () => {},
	statesOptions: [],
	StoreSelectDisabled: true,
	storeSelected: {},
	handleChangeStores: () => {},
	storesOptions: [],
	handleClickSubmit: () => {},
	setSelectFocus: false
};

export default Form;
