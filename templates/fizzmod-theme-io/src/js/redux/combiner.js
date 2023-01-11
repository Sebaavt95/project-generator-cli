import { combineReducers } from 'redux';
import vtex from './vtex';
import storeSelector from './storeSelector';
import header from './header';
import orderForm from './orderForm';
import substitutes from './substitutes';

export default combineReducers({
	vtex,
	storeSelector,
	header,
	orderForm,
	substitutes
});
