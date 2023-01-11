import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Success from './Success';

const mapStateToProps = ({ storeSelector: { store } }) => {
	return {
		storeName: store ? store.name : ''
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Success);
