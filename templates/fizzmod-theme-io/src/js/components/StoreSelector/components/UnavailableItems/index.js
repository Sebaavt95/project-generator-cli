import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations } from 'redux/storeSelector';
import UnavailableItems from './UnavailableItems';

const mapStateToProps = ({ storeSelector: { unavailableData } }) => {
	return {
		unavailableData
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			goInit: operations.goInit,
			changeStore: operations.changeStore
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(UnavailableItems);
