import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { operations } from 'redux/storeSelector';
import DeliverySelector from './DeliverySelector';

const mapDispatchToProps = dispatch => {
	operations.initStates(dispatch);

	return bindActionCreators(
		{
			goBack: operations.goBack,
			changeStep: operations.changeStep
		},
		dispatch
	);
};

export default connect(null, mapDispatchToProps)(DeliverySelector);
