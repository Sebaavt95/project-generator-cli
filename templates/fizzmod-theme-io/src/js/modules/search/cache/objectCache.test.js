import objectCache from './objectCache';

describe('objectCache tests', () => {
	it('must be an object and contains save, getCache, and getKey functions', () => {
		const cache = objectCache();

		expect(cache).toEqual(
			expect.objectContaining({
				save: expect.any(Function),
				getCache: expect.any(Function),
				getKey: expect.any(Function)
			})
		);
	});

	describe('save function', () => {
		it('must save given data in correct given key', () => {
			const cache = objectCache();

			const keys = ['key-1'];
			const data = { a: 1, b: 2 };

			cache.save(keys, data);

			expect(cache.getCache()).toEqual({ 'key-1': { a: 1, b: 2 } });
		});

		it('must return true if data is saved', () => {
			const cache = objectCache();

			const keys = ['key-1'];
			const data = { a: 1, b: 2 };

			expect(cache.save(keys, data)).toBeTruthy();
		});

		it('must return false if keys given are not an Array', () => {
			const cache = objectCache();

			const data = { a: 1, b: 2 };

			expect(cache.save({}, data)).toBeFalsy();
			expect(cache.save(1, data)).toBeFalsy();
			expect(cache.save('some string', data)).toBeFalsy();
		});

		it('must return false if data param is undefined or null', () => {
			const cache = objectCache();
			const keys = ['key-1'];

			expect(cache.save(keys)).toBeFalsy();
			expect(cache.save(keys, null)).toBeFalsy();
		});
	});

	describe('getCache function', () => {
		it('must return empty cache object if there is no data cached', () => {
			const cache = objectCache();

			expect(cache.getCache()).toEqual({});
		});

		it('must return object with cached data if it something was saved before', () => {
			const cache = objectCache();

			const keys = ['key-1', 'key-2'];
			const data = { a: 1, b: 2 };

			cache.save(keys, data);

			expect(cache.getCache()).toEqual({ 'key-1': { a: 1, b: 2 }, 'key-2': { a: 1, b: 2 } });
		});
	});

	describe('getKey function', () => {
		it('must return null if key param is not defined', () => {
			const cache = objectCache();

			expect(cache.getKey()).toEqual(null);
		});

		it('must return data saved in given key', () => {
			const cache = objectCache();

			const keys = ['key-1', 'key-2'];
			const data = { a: 1, b: 2 };

			cache.save(keys, data);

			expect(cache.getKey('key-1')).toEqual({ a: 1, b: 2 });
		});
	});
});
