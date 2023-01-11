import reducer from '../reducer';
import types from '../types';

describe('orderForm reducer', () => {
	const initialState = {
		loading: false,
		data: {}
	};

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should handle UPDATE', () => {
		expect(
			reducer(
				{},
				{
					type: types.UPDATE,
					data: { items: [{ id: 32, quantity: 2 }] }
				}
			)
		).toEqual({
			data: { items: [{ id: 32, quantity: 2 }] }
		});

		expect(
			reducer(initialState, {
				type: types.UPDATE,
				data: { items: [{ id: 32, quantity: 2 }] }
			})
		).toEqual({
			data: { items: [{ id: 32, quantity: 2 }] },
			loading: false
		});
	});

	it('should handle UPDATE_SEARCH_ITEMS', () => {
		expect(
			reducer(
				{},
				{
					type: types.UPDATE_SEARCH_ITEMS,
					data: [{ id: 45, quantity: 5 }]
				}
			)
		).toEqual({
			data: { searchItems: [{ id: 45, quantity: 5 }] }
		});

		expect(
			reducer(
				{
					loading: true,
					data: {
						items: [{ id: 6, quantity: 4 }]
					}
				},
				{
					type: types.UPDATE_SEARCH_ITEMS,
					data: [{ id: 45, quantity: 5 }]
				}
			)
		).toEqual({
			loading: true,
			data: {
				items: [{ id: 6, quantity: 4 }],
				searchItems: [{ id: 45, quantity: 5 }]
			}
		});
	});

	it('should handle UPDATE_LOADING', () => {
		expect(
			reducer(
				{},
				{
					type: types.UPDATE_LOADING,
					payload: true
				}
			)
		).toEqual({
			loading: true
		});

		expect(
			reducer(
				{},
				{
					type: types.UPDATE_LOADING,
					payload: false
				}
			)
		).toEqual({
			loading: false
		});

		expect(
			reducer(
				{
					loading: true,
					data: {
						items: [{ id: 6, quantity: 4 }]
					}
				},
				{
					type: types.UPDATE_LOADING,
					payload: false
				}
			)
		).toEqual({
			loading: false,
			data: {
				items: [{ id: 6, quantity: 4 }]
			}
		});
	});
});
