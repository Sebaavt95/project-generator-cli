import React from 'react';
import { bool } from 'prop-types';
import styles from './styles';

const Checkbox = ({ checked, ...rest }) => {
	return <styles.Checkbox {...rest} checked={checked} />;
};

Checkbox.propTypes = {
	checked: bool
};

Checkbox.defaultProps = {
	checked: false
};

export default Checkbox;
