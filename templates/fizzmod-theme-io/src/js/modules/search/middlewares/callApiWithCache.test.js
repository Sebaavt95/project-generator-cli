import callApiWithCache from './callApiWithCache';
import objectCache from '../cache/objectCache';

const apiFunctionMock = jest.fn(async items => {
	try {
		return items.map(key => ({ id: key, name: `test product ${key}` }));
	} catch (error) {
		return Promise.reject(error);
	}
});

describe('callApiWithCache tests', () => {
	it('must return a promise response with data', () => {
		const cache = objectCache();

		const config = {
			cache,
			getIdCallback: item => item.id,
			api: apiFunctionMock
		};

		callApiWithCache([1, 2, 3], config).then(res => {
			expect(res).toEqual([
				{ id: 1, name: 'test product 1' },
				{ id: 2, name: 'test product 2' },
				{ id: 3, name: 'test product 3' }
			]);
		});
	});

	it('must call api if no one input param was cached before', () => {
		const cache = objectCache();

		const config = {
			cache,
			getIdCallback: item => item.id,
			api: apiFunctionMock
		};

		callApiWithCache([1, 2], config).then(() => {
			expect(apiFunctionMock).toHaveBeenCalled();
		});
	});

	it('must avoid call api if all input params are already cached', () => {
		const cache = objectCache();

		const keys = [1, 2];
		const data = { a: 1, b: 2 };

		cache.save(keys, data);

		const config = {
			cache,
			getIdCallback: item => item.id,
			api: apiFunctionMock
		};

		callApiWithCache([1, 2], config).then(() => {
			expect(apiFunctionMock).not.toHaveBeenCalled();
		});
	});

	it('must call api only with no cached items params', () => {
		const cache = objectCache();

		const keys = [1, 2];
		const data = { a: 1, b: 2 };

		cache.save(keys, data);

		const config = {
			cache,
			getIdCallback: item => item.id,
			api: apiFunctionMock
		};

		callApiWithCache([1, 2, 3, 4], config).then(() => {
			expect(apiFunctionMock.mock.calls[0][0]).toEqual([3, 4]);
		});
	});
});
