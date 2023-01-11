import React from 'react';
import { bool } from 'prop-types';
import useDevices from 'hooks/useDevices';
import useVtexCheckout from 'hooks/useVtexCheckout';
import styles from './styles';
import Coupon from './components/Coupon';
import Description from './components/Description';
import Totals from './components/Totals';
import Payments from './components/Payments';

const Summary = ({ storeSelectorActive }) => {
	const { orderFormState: orderForm = {} } = useVtexCheckout() || {};

	const { totalizers, value: total } = orderForm;

	const parseTotalizers = totals =>
		totals &&
		totals.map(item =>
			item.id === 'Shipping' && typeof item.value === 'string'
				? Object.assign({}, item, { highlight: true })
				: item
		);
	const { mobile, tablet } = useDevices();

	return (
		<styles.Wrapper>
			{storeSelectorActive && <styles.StoreSelector />}
			<Coupon orderForm={orderForm} />
			<Description totalizers={parseTotalizers(totalizers)} />
			<Totals isTablet={tablet} isMobile={mobile} total={total} />
			{tablet && (
				<styles.WrapperIcon>
					<styles.Icon name="lock" size={34} />
					<styles.TextLock variant="caption">Compra 100% segura</styles.TextLock>
				</styles.WrapperIcon>
			)}
			<Payments />
		</styles.Wrapper>
	);
};

Summary.propTypes = {
	storeSelectorActive: bool
};

Summary.defaultProps = {
	storeSelectorActive: false
};

export default Summary;
