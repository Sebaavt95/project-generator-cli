import React from 'react';
import { string } from 'prop-types';
import styles from './styles';

const Input = ({ label, name, className, ...props }) => {
	const ForLabel = name || label;
	return (
		<styles.Wrapper className={className}>
			{ForLabel && (
				<styles.Label htmlFor={ForLabel}>
					<styles.Text variant="caption">{label}</styles.Text>
				</styles.Label>
			)}
			<styles.Input {...props} />
		</styles.Wrapper>
	);
};

Input.propTypes = {
	label: string,
	name: string,
	className: string
};

Input.defaultProps = {
	label: '',
	name: '',
	className: ''
};

export default Input;
