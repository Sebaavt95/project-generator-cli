import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { operations } from 'redux/storeSelector';
import GeoSelector from './GeoSelector';

function mapDispatchToProps(dispatch) {
	operations.initStates(dispatch);

	return bindActionCreators(
		{
			goInit: operations.goInit,
			changeStore: operations.changeStore,
			changeStep: operations.changeStep
		},
		dispatch
	);
}

export default connect(null, mapDispatchToProps)(GeoSelector);
