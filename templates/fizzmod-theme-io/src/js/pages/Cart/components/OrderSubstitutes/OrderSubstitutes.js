import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useDevices from 'hooks/useDevices';
import { setOrderSubstituteValue } from 'redux/substitutes';
import OptionsDesktop from './components/OptionsDesktop';
import OptionsMobile from './components/OptionsMobile';
import OptionMessage from './components/OptionMessage';
import styles from './styles';

const specificOptions = [
	{
		value: 'SPECIFIC',
		label: 'Criterio específico'
	}
];

const OrderSubstitutes = () => {
	const {
		substitutes: substitutesFunctions,
		substitutesOptions,
		orderInfo,
		substituteValue
	} = useSelector(({ substitutes }) => ({
		substitutes: substitutes.substitutes,
		substitutesOptions: substitutes.substitutesOptions,
		orderInfo: substitutes.orderInfo,
		substituteValue: substitutes.orderSubstitutes.substituteValue
	}));

	const { substituteType = '' } = orderInfo || {};
	const { value: checkedValue = '' } = substituteValue || {};

	const dispatch = useDispatch();

	const { tablet } = useDevices();

	useEffect(() => {
		if (!substitutesOptions) return;
		const allSubstitutesOptions = [...substitutesOptions, ...specificOptions];
		dispatch(setOrderSubstituteValue(substituteType, allSubstitutesOptions));
	}, [substituteType]);

	return (
		<styles.OrderSubstitutes>
			<styles.Container>
				<styles.HeadWrapper>
					<styles.Title variant="body1">
						Selecciona tu criterio de sustitución preferido
					</styles.Title>
					<styles.Description variant="overline" component="body1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</styles.Description>
				</styles.HeadWrapper>
				<styles.BodyWrapper>
					{tablet ? (
						<OptionsMobile
							substitutesFunctions={substitutesFunctions}
							substitutesOptions={substitutesOptions}
							substituteValue={substituteValue}
						/>
					) : (
						<OptionsDesktop
							substitutesFunctions={substitutesFunctions}
							substitutesOptions={substitutesOptions}
							checkedValue={checkedValue}
						/>
					)}
				</styles.BodyWrapper>
				<OptionMessage checkedOption={substituteType} />
			</styles.Container>
		</styles.OrderSubstitutes>
	);
};

export default OrderSubstitutes;
