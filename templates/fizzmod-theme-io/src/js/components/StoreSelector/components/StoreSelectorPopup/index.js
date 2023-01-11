import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STORE_KEY } from 'redux/header/reducer';
import { operations } from 'redux/storeSelector';
import StoreSelector from './StoreSelectorPopup';

const mapStateToProps = ({ storeSelector: { step }, header: { open } }) => {
	return {
		open: open[STORE_KEY],
		step
	};
};

const mapDispatchToProps = dispatch => {
	operations.initStates(dispatch);
	return bindActionCreators(
		{
			goInit: operations.goInit
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreSelector);
