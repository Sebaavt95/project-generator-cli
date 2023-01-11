import { theme } from '../theme/theme';

export const getColor = (type = 'primary', color = 'main') => () => {
	if (!theme) return;

	const { palette } = theme;
	const colorType = palette[type];
	return colorType[color];
};

export const getTransition = (target = 'all', timing = 'short', effect = 'easeIn') => () => {
	if (!theme) return;

	const {
		transitions: { duration, easing }
	} = theme;
	return `transition: ${target} ${duration[timing]}ms ${easing[effect]};`;
};

export const getVariables = key => ({ theme }) => {
	if (!theme || !key) return;

	const { variables = {} } = theme;
	if (!Object.keys(variables).length) return;
	return variables[key] || '';
};

export const getFontWeight = str => () => {
	if (!theme || !str) return;

	const { typography } = theme;
	switch (str) {
		case 'light':
			return `font-weight: ${typography.fontWeightLight}`;
		case 'regular':
			return `font-weight: ${typography.fontWeightRegular}`;
		case 'medium':
			return `font-weight: ${typography.fontWeightMedium}`;
		case 'bold':
			return `font-weight: ${typography.fontWeightBold}`;
		case 'black':
			return `font-weight: ${typography.fontWeightBlack}`;
		default:
			return `font-weight: ${typography.fontWeightRegular}`;
	}
};
