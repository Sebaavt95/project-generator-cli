import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { operations } from 'redux/storeSelector';

import StateSelector from './StateSelector';

function mapStateToProps({ storeSelector }) {
	return {
		states: storeSelector.states,
		stores: storeSelector.stores,
		store: storeSelector.store
	};
}

function mapDispatchToProps(dispatch) {
	operations.initStates(dispatch);

	return bindActionCreators(
		{
			searchState: operations.searchState,
			changeStore: operations.changeStore,
			changeStep: operations.changeStep,
			goInit: operations.goInit
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(StateSelector);
