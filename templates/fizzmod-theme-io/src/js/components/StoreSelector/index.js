import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateOpen } from 'redux/header/operations';
import StoreSelector from './StoreSelector';

const mapStateToProps = ({ storeSelector: { store = {} } }) => {
	return {
		storeName: store.name
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			handleOpen: updateOpen
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreSelector);
