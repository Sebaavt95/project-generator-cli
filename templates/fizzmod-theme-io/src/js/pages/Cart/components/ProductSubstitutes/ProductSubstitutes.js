import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { oneOfType, number, string } from 'prop-types';
import { changeProductSubstitute } from 'redux/substitutes';
import styles from './styles';

const ProductSubstitutes = ({ id, ...rest }) => {
	const [substituteValue, setSubstituteValue] = useState(null);

	const { substitutes: substitutesFunctions, substitutesOptions, orderInfo } = useSelector(
		({ substitutes }) => ({
			substitutes: substitutes.substitutes,
			substitutesOptions: substitutes.substitutesOptions,
			orderInfo: substitutes.orderInfo
		})
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!orderInfo) return;
		const { skuData } = orderInfo || {};
		const { substituteType = '' } = skuData[id] || {};
		const selectedValue = substitutesOptions.find(({ value }) => value === substituteType);
		setSubstituteValue(selectedValue);
	}, [orderInfo]);

	const handleChangeSubstitute = opt => {
		const { value } = opt;
		if (substitutesFunctions) dispatch(changeProductSubstitute(substitutesFunctions, id, value));
	};

	return (
		<styles.SelectWrapper {...rest}>
			<styles.Select
				options={substitutesOptions}
				onChange={handleChangeSubstitute}
				value={substituteValue}
				noOptionsMessage={() => 'Vacío...'}
				placeholder="Seleccione..."
				isSearchable={false}
			/>
		</styles.SelectWrapper>
	);
};

ProductSubstitutes.propTypes = {
	id: oneOfType([number, string]).isRequired
};

export default ProductSubstitutes;
