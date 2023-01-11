import types from './types';

export const actSetSubstitutes = substitutes => ({
	type: types.SET_SUBSTITUTES,
	payload: substitutes
});

export const actSetSubstitutesOptions = options => ({
	type: types.SET_SUBSTITUTES_OPTIONS,
	payload: options
});

export const actUpdateOrderInfo = orderInfo => ({
	type: types.UPDATE_ORDER_INFO,
	payload: orderInfo
});

export const actSetOrderSubstituteValue = substituteValue => ({
	type: types.SET_ORDER_SUBSTITUTE_VALUE,
	payload: substituteValue
});
