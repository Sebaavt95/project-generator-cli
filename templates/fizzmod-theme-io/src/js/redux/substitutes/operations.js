import { setSubstitutesMethodForConfig } from 'utils/substitutes';
import substitutesObj from '@fizzmod/order-info-substitutes';
import {
	actSetSubstitutes,
	actSetSubstitutesOptions,
	actUpdateOrderInfo,
	actSetOrderSubstituteValue
} from './actions';
import substitutesConfig from './config/substitutes.json';

const { options: substitutesOptions = {}, defaultSubstitute } = substitutesConfig || {};

const getOption = (value = null, options = []) => {
	return {
		value,
		label: options[value]
	};
};

export const setSubstitutes = (substitutesMethod, environment) => dispatch => {
	const substitutesMethodChosen = setSubstitutesMethodForConfig(substitutesMethod);

	const substitutesConfigParams = {
		...substitutesMethodChosen,
		storeName: environment,
		defaultOrderSubstitute: defaultSubstitute
	};

	const substitutes = substitutesObj(substitutesConfigParams);
	dispatch(actSetSubstitutes(substitutes));

	const parsedOptions = Object.keys(substitutesOptions).map(item =>
		getOption(item, substitutesOptions)
	);

	dispatch(actSetSubstitutesOptions(parsedOptions));
};

export const getOrderInfo = substitutes => dispatch => {
	substitutes
		.getOrderInfo()
		.then(res => {
			dispatch(actUpdateOrderInfo(res));
		})
		.catch(console.error);
};

export const changeOrderSubstitute = (substitutes, typeId = 'NONE') => dispatch => {
	substitutes
		.changeOrderSubstitute(typeId)
		.then(res => {
			dispatch(actUpdateOrderInfo(res));
		})
		.catch(console.error);
};

export const changeProductSubstitute = (substitutes, skuId, typeId = 'NONE') => dispatch => {
	substitutes
		.changeProductSubstitute(skuId, typeId)
		.then(res => {
			dispatch(actUpdateOrderInfo(res));
		})
		.catch(console.error);
};

export const saveOrderInfo = substitutes => substitutes.saveOrderInfo().catch(console.error);

export const setOrderSubstituteValue = (checkedValue, options) => dispatch => {
	const defaultValue = checkedValue || null;
	const selectedOrderValue = defaultValue
		? options.find(({ value }) => value === defaultValue)
		: null;
	dispatch(actSetOrderSubstituteValue(selectedOrderValue));
};
