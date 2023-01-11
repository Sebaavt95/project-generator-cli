import React from 'react';
import { number, func, bool, shape, string, oneOfType } from 'prop-types';
import styles from './styles';

const QuantitySelector = ({
	value,
	handleMinus,
	handlePlus,
	handleChange,
	handleFocus,
	handleBlur,
	inputProps,
	minusProps,
	plusProps,
	buttonsWidth,
	...rest
}) => (
	<styles.Selector {...rest}>
		<styles.Minus
			onClick={handleMinus}
			size={14}
			variant="square"
			nameicon="minus"
			buttonsWidth={buttonsWidth}
			{...minusProps}
		/>
		<styles.Input
			value={value}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			{...inputProps}
		/>
		<styles.Plus
			onClick={handlePlus}
			size={14}
			variant="square"
			nameicon="plus"
			buttonsWidth={buttonsWidth}
			{...plusProps}
		/>
	</styles.Selector>
);

QuantitySelector.propTypes = {
	value: oneOfType([number, string]),
	handleMinus: func,
	handlePlus: func,
	handleChange: func,
	handleFocus: func,
	handleBlur: func,
	buttonsWidth: number,
	inputProps: shape({
		disabled: bool,
		className: string
	}),
	minusProps: shape({
		disabled: bool,
		className: string
	}),
	plusProps: shape({
		disabled: bool,
		className: string
	})
};

QuantitySelector.defaultProps = {
	value: 1,
	handleMinus: () => {},
	handlePlus: () => {},
	handleChange: () => {},
	handleFocus: () => {},
	handleBlur: () => {},
	buttonsWidth: 56,
	inputProps: {
		disabled: false,
		className: ''
	},
	minusProps: {
		disabled: false,
		className: ''
	},
	plusProps: {
		disabled: false,
		className: ''
	}
};

export default QuantitySelector;
