import { actUpdateOpen } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const updateOpen = (element, payload) => dispatch => () => {
	dispatch(actUpdateOpen(element, payload));
};
