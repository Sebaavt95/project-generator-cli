import React from 'react';
import { func } from 'prop-types';
import styles from './styles';

const ScNotFound = ({ handleSearchAddress, handleFindStore }) => {
	return (
		<styles.Wrapper>
			<styles.WrapperMessage>
				<styles.Icon svgName="icons/warning" size={24} />
				<styles.Text variant="body1">No hemos encontrado una tienda para tu ubicación</styles.Text>
			</styles.WrapperMessage>
			<styles.WrapperButtons>
				<styles.SearchAddress color="secondary" variant="outlined" onClick={handleSearchAddress}>
					Buscar otro código postal
				</styles.SearchAddress>
				<styles.FindStore color="secondary" variant="contained" onClick={handleFindStore}>
					Buscar por tienda
				</styles.FindStore>
			</styles.WrapperButtons>
		</styles.Wrapper>
	);
};

ScNotFound.propTypes = {
	handleSearchAddress: func,
	handleFindStore: func
};

ScNotFound.defaultProps = {
	handleSearchAddress: () => {},
	handleFindStore: () => {}
};

export default ScNotFound;
