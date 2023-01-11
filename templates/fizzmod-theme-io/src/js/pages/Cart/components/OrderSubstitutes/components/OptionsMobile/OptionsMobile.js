import React from 'react';
import { useDispatch } from 'react-redux';
import { string, array, object } from 'prop-types';
import { changeOrderSubstitute } from 'redux/substitutes';
import styles from './styles';

const OptionsMobile = ({ substitutesFunctions, substitutesOptions, substituteValue }) => {
	const dispatch = useDispatch();

	const handleChangeOrderSubstitute = opt => {
		const { value } = opt;
		if (substitutesFunctions) dispatch(changeOrderSubstitute(substitutesFunctions, value));
	};

	return (
		<styles.SelectWrapper>
			<styles.Select
				options={substitutesOptions}
				value={substituteValue}
				onChange={handleChangeOrderSubstitute}
				noOptionsMessage={() => 'Vacío...'}
				placeholder="Seleccione..."
				isSearchable={false}
			/>
		</styles.SelectWrapper>
	);
};

OptionsMobile.propTypes = {
	substitutesFunctions: object,
	substitutesOptions: array,
	substituteValue: string
};

OptionsMobile.defaultProps = {
	substitutesFunctions: {},
	substitutesOptions: [],
	substituteValue: ''
};

export default OptionsMobile;
