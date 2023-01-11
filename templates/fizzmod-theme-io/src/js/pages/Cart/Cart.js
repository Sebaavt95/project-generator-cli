import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useDevices from 'hooks/useDevices';
import useVtexCheckout from 'hooks/useVtexCheckout';
import useSteps from 'hooks/useSteps';
import { STORE_KEY } from 'redux/header/reducer';
import { updateOpen } from 'redux/header/operations';
import { initializeSaleChannel } from 'redux/vtex/operations';
import { setSubstitutes, getOrderInfo } from 'redux/substitutes';
import { scrollToTop } from 'utils';
import { Animated } from 'react-animated-css';
import CartHeader from './components/Header';
import StoreSelectorPopup from '../../components/StoreSelector/components/StoreSelectorPopup';
import ProductList from './components/ProductList';
import Summary from './components/Summary';
import EmptyCart from './components/EmptyCart';
import styles from './styles';
import OrderSubstitutes from './components/OrderSubstitutes';

const {
	env,
	activeCheckoutModules: { orderSubstitutes, storeSelector },
	substitutesMethod
} = ENV;

const Cart = () => {
	const { orderFormState: orderForm = {} } = useVtexCheckout() || {};
	const { items = [] } = orderForm;

	const { openStoreSelector } = useSelector(({ header }) => ({
		openStoreSelector: header.open[STORE_KEY]
	}));
	const { substitutes: substitutesFunctions, orderInfo } = useSelector(({ substitutes }) => ({
		substitutes: substitutes.substitutes,
		orderInfo: substitutes.orderInfo
	}));
	const dispatch = useDispatch();

	const handleOpen = (element, payload) => dispatch(updateOpen(element, payload));

	const handleSetSubstitutes = (subsMethod, environment) =>
		dispatch(setSubstitutes(subsMethod, environment));
	const handleGetOrderInfo = subs => dispatch(getOrderInfo(subs));

	const { isCheckout } = useSteps();

	const device = useDevices();
	const isTablet = device.tablet;
	const isMobile = device.mobile;

	useEffect(() => {
		if (!storeSelector) return;
		initializeSaleChannel(dispatch);
	}, []);

	useEffect(() => {
		if (isMobile) scrollToTop(500);
	}, [isCheckout]);

	useEffect(() => {
		if (!orderSubstitutes) return;

		if (orderForm && !substitutesFunctions) {
			handleSetSubstitutes(substitutesMethod, env);
		}
		if (substitutesFunctions && !orderInfo) {
			handleGetOrderInfo(substitutesFunctions);
		}
	}, [orderForm]);

	if (isCheckout) return null;

	return (
		<React.Fragment>
			<styles.Wrapper emptyCart={!items.length}>
				<styles.Body fullWidth={!items.length || isTablet} isTablet={isTablet}>
					<CartHeader />
					{!items.length ? (
						<EmptyCart />
					) : (
						<>
							{orderSubstitutes && <OrderSubstitutes />}
							<ProductList
								isTablet={isTablet}
								orderForm={orderForm}
								orderSubstitutesActive={orderSubstitutes}
							/>
						</>
					)}
				</styles.Body>
				{!!items.length && <Summary storeSelectorActive={storeSelector} />}
				{storeSelector && (
					<>
						{openStoreSelector && (
							<>
								<styles.Overlay onClick={handleOpen(STORE_KEY, false)} />
								<Animated className="animated-element" animationInDuration={300}>
									<StoreSelectorPopup
										handleClose={handleOpen(STORE_KEY, false)}
										open={openStoreSelector}
									/>
								</Animated>
							</>
						)}
					</>
				)}
			</styles.Wrapper>
		</React.Fragment>
	);
};

export default Cart;
