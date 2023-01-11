import React from 'react';
import { objectOf, any } from 'prop-types';
import styles from './styles';

const DropdownIndicator = (cx, ...props) => {
	const { selectProps = {} } = cx;

	return (
		<styles.IconContainer {...props}>
			{selectProps.menuIsOpen ? (
				<styles.Icon open={selectProps.menuIsOpen} svgName="arrowUp" size={14} />
			) : (
				<styles.Icon open={selectProps.menuIsOpen} svgName="arrowDown" size={14} />
			)}
		</styles.IconContainer>
	);
};

const Select = ({ components, ...props }) => {
	return <styles.Select {...props} components={{ DropdownIndicator, ...components }} />;
};

Select.propTypes = {
	components: objectOf(any)
};

Select.defaultProps = {
	components: {}
};

export default Select;
