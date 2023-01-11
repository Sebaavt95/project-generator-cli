import React from 'react';
import { string, oneOfType, node } from 'prop-types';
import styles from './styles';

const Link = ({ href, children, ...rest }) => {
	if (!href || !children) return null;

	return (
		<styles.Link href={href} {...rest}>
			{children}
		</styles.Link>
	);
};

Link.propTypes = {
	href: string.isRequired,
	children: oneOfType([node, string]).isRequired
};

export default Link;
