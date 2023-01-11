import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { operations } from 'redux/storeSelector';
import ZipSelector from './ZipSelector';

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

export default connect(null, mapDispatchToProps)(ZipSelector);
