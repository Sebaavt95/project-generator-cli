import { orderItems, observer } from '../utils';

describe('utils tests', () => {
	describe('orderItems function', () => {
		it('should return items ordered by referenceItems param', () => {
			/* OrderForm items simulation */
			const referenceItems = [
				{ id: 4, quantity: 2, name: 'name of sku' },
				{ id: 6, quantity: 1, name: 'name of sku 2' },
				{ id: 1, quantity: 1, name: 'name of sku 3' }
			];

			/* Search api response simulation */
			const disorderedItems = [
				{ productId: 23, items: [{ itemId: 6, quantity: 1, name: 'name of sku 2' }] },
				{ productId: 22, items: [{ itemId: 1, quantity: 1, name: 'name of sku 3' }] },
				{ productId: 24, items: [{ itemId: 4, quantity: 2, name: 'name of sku' }] }
			];

			expect(orderItems(referenceItems, disorderedItems)).toEqual([
				{ productId: 24, items: [{ itemId: 4, quantity: 2, name: 'name of sku' }] },
				{ productId: 23, items: [{ itemId: 6, quantity: 1, name: 'name of sku 2' }] },
				{ productId: 22, items: [{ itemId: 1, quantity: 1, name: 'name of sku 3' }] }
			]);
		});

		it('should return empty array if some param are not a valid array', () => {
			const validReferenceItemsArray = [{ id: 4, quantity: 2 }];
			const validDisorderedItemsArray = [
				{ productId: 24, items: [{ itemId: 4, quantity: 2, name: 'name of sku' }] }
			];

			expect(orderItems(undefined, validDisorderedItemsArray)).toEqual([]);
			expect(orderItems(null, validDisorderedItemsArray)).toEqual([]);
			expect(orderItems({}, validDisorderedItemsArray)).toEqual([]);
			expect(orderItems(validReferenceItemsArray, undefined)).toEqual([]);
			expect(orderItems(validReferenceItemsArray, null)).toEqual([]);
			expect(orderItems(validReferenceItemsArray, {})).toEqual([]);
			expect(orderItems(undefined, undefined)).toEqual([]);
		});
	});

	describe('observer function', () => {
		it('should return object with observer functions', () => {
			const observerInstance = observer();

			expect(typeof observerInstance).toBe('object');
			expect(observerInstance).toHaveProperty('subscribe');
			expect(observerInstance).toHaveProperty('unsubscribe');
		});

		test('subscribe and unsubscribe are functions', () => {
			const { subscribe, unsubscribe } = observer();

			expect(typeof subscribe).toBe('function');
			expect(typeof unsubscribe).toBe('function');
		});
	});
});
