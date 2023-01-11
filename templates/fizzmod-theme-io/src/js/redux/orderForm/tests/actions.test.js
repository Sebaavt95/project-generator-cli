import types from '../types';
import { actUpdate, actUpdateSearchItems, actUpdateLoading } from '../actions';

describe('actions', () => {
	it('should create an action to update data key', () => {
		const data = { items: [{ id: 32, quantity: 2 }] };

		const expectedAction = {
			type: types.UPDATE,
			data
		};

		expect(actUpdate(data)).toEqual(expectedAction);
	});

	it('should create an action to update searchItems key', () => {
		const data = [{ id: 32, quantity: 2 }];

		const expectedAction = {
			type: types.UPDATE_SEARCH_ITEMS,
			data
		};

		expect(actUpdateSearchItems(data)).toEqual(expectedAction);
	});

	it('should create an action to update loading state key', () => {
		const expectedAction = {
			type: types.UPDATE_LOADING,
			payload: true
		};

		expect(actUpdateLoading(true)).toEqual(expectedAction);
	});
});
