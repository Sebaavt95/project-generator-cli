/* eslint-disable react/no-danger */
/* eslint-disable global-require */
import React from 'react';
import { string, number, oneOf } from 'prop-types';
import WithErrorBoundary from 'components/Hocs/WithErrorBoundary';
import { Icon, Illustration } from './styles';

const Svg = ({ type, svgName, size, color, ...props }) => {
	if (!svgName) return null;

	const tryRequire = fileName => {
		try {
			// eslint-disable-next-line import/no-dynamic-require
			return require(`!!raw-loader!./svg/${fileName}.svg`);
		} catch (err) {
			return null;
		}
	};

	const svg = tryRequire(svgName) ? tryRequire(svgName).default : null;

	if (!svg) return null;

	if (type === 'illustration')
		return <Illustration {...props} size={size} dangerouslySetInnerHTML={{ __html: svg }} />;

	return <Icon {...props} size={size} color={color} dangerouslySetInnerHTML={{ __html: svg }} />;
};

Svg.propTypes = {
	/** Name of svg file  in svg folder */
	svgName: string,
	/** size of svg if is icon. If type is illustration, the size is width */
	size: number,
	color: string,
	type: oneOf(['icon', 'illustration'])
};

Svg.defaultProps = {
	svgName: '',
	size: 16,
	color: 'inherit',
	type: 'icon'
};

export default WithErrorBoundary(Svg);

// Only for Storybooks
export { Svg };
