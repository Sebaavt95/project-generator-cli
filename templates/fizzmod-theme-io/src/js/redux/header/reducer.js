import types from './types';

export const NAV_KEY = 'nav';
export const SEARCH_KEY = 'search';
export const SEARCH_INPUT_KEY = 'search-input';
export const USER_KEY = 'user';
export const MINICART_KEY = 'minicart';
export const STORE_KEY = 'storeSelector';

const initialState = {
	open: {
		[NAV_KEY]: false,
		[SEARCH_KEY]: false,
		[SEARCH_INPUT_KEY]: false,
		[USER_KEY]: false,
		[MINICART_KEY]: false,
		[STORE_KEY]: false
	}
};

const header = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_OPEN:
			return {
				...state,
				open: Object.keys(state.open).reduce((acum, key) => {
					if (key === action.element) return { ...acum, [key]: action.payload };

					return { ...acum, [key]: false };
				}, {})
			};
		case types.UPDATE_OPEN_MULTI:
			return {
				...state,
				open: Object.keys(state.open).reduce((acum, key) => {
					if (action.elements.includes(key)) return { ...acum, [key]: action.payload };

					return { ...acum, [key]: false };
				}, {})
			};
		case types.ONLY_OPEN:
			return {
				...state,
				open: { ...state.open, [action.element]: true }
			};
		case types.ONLY_CLOSE:
			return {
				...state,
				open: { ...state.open, [action.element]: false }
			};
		default:
			return state;
	}
};

export default header;
