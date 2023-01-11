import React from 'react';
import { oneOf, node } from 'prop-types';
import styles from './styles';

const Typography = ({ variant, component, children, ...props }) => {
	const variantMap = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		h5: 'h5',
		h6: 'h6',
		subtitle1: 'h6',
		subtitle2: 'h6',
		body1: 'p',
		body2: 'p',
		caption: 'span',
		overline: 'span'
	};

	const componentTag =
		component && variantMap[component] ? variantMap[component] : variantMap[variant];

	return (
		<styles.Typography as={componentTag} {...props} variant={variant}>
			{children}
		</styles.Typography>
	);
};

Typography.propTypes = {
	/** Text */
	children: node.isRequired,
	/** Style from theme.typography */
	variant: oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'subtitle1',
		'subtitle2',
		'body1',
		'body2',
		'caption',
		'overline'
	]),
	/** Tag html to render . If component is empty, its render variant prop as tag */
	component: oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'subtitle1',
		'subtitle2',
		'body1',
		'body2',
		'caption',
		'overline',
		''
	])
};

Typography.defaultProps = {
	variant: 'body1',
	component: ''
};
export default Typography;
