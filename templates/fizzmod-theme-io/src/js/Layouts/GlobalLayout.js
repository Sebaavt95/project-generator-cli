import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initOrderForm } from 'redux/orderForm';
import { oneOfType, element, string, node } from 'prop-types';

const GlobalLayout = ({ children }) => {
	if (!children) return null;

	const dispatch = useDispatch();

	useEffect(() => {
		initOrderForm(dispatch);
	}, []);

	return <>{children}</>;
};

GlobalLayout.propTypes = {
	children: oneOfType([string, element, node]).isRequired
};

export default GlobalLayout;
