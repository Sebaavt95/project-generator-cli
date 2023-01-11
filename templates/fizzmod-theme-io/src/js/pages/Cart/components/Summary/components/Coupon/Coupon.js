import React, { useState, useEffect } from 'react';
import { objectOf, any } from 'prop-types';
import useCouponVtex from 'hooks/useCouponVtex';
import Logo from './components/Logo';
import styles from './styles';

const Coupon = ({ orderForm }) => {
	const {
		valueCoupon,
		isValidCoupon,
		loading,
		statusMsg,
		handleRemoveCoupon,
		handleAddCoupon
	} = useCouponVtex(orderForm);

	const [inputvalue, setInputValue] = useState('');
	const handleClick = value => (!valueCoupon ? handleAddCoupon(value) : handleRemoveCoupon());
	const handleChange = evt => setInputValue(evt.target.value);
	const handleKey = e => {
		if (e.key === 'Enter') handleClick(inputvalue);
	};

	useEffect(() => {
		if (valueCoupon) setInputValue(valueCoupon);
		else setInputValue('');
	}, []);

	const { emptyValue, invalid, success, couponRemove } = statusMsg;

	useEffect(() => {
		if (!loading) {
			if (valueCoupon) setInputValue(valueCoupon);
			else setInputValue('');
		}
	}, [loading]);
	return (
		<styles.Wrapper>
			<Logo text="¿Tenés un cupón de descuento?" />
			<styles.Text variant="caption" component="body1">
				Sumar cupón
			</styles.Text>
			<styles.Content>
				<styles.WrapperInput error={statusMsg.invalid || statusMsg.emptyValue}>
					<styles.Input
						placeholder="Código"
						onChange={handleChange}
						value={valueCoupon || inputvalue}
						disabled={isValidCoupon}
						onKeyPress={handleKey}
					/>
					{isValidCoupon && <styles.IconSuccess svgName="success" size={12} />}
				</styles.WrapperInput>
				<styles.Button
					variant={!valueCoupon ? 'contained' : 'outlined'}
					color="secondary"
					onClick={() => handleClick(inputvalue)}
				>
					{!valueCoupon ? 'Agregar' : 'Borrar'}
				</styles.Button>
			</styles.Content>
			{(!!emptyValue || !!invalid) && (
				<styles.StatusMessage variant="caption" component="body1" color="error">
					{emptyValue || invalid}
				</styles.StatusMessage>
			)}
			{!!success && (
				<styles.StatusMessage variant="caption" component="body1" color="success">
					{success}
				</styles.StatusMessage>
			)}
			{!!couponRemove && (
				<styles.StatusMessage variant="caption" component="body1">
					{couponRemove}
				</styles.StatusMessage>
			)}
		</styles.Wrapper>
	);
};

Coupon.propTypes = {
	orderForm: objectOf(any)
};

Coupon.defaultProps = {
	orderForm: {}
};

export default Coupon;
