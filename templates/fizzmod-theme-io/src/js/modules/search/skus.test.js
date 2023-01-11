import searchSkus from './skus';

describe('searchSkus function', () => {
	it('must return empty array if items param is an empty array', () => {
		searchSkus([]).then(res => {
			expect(res).toEqual([]);
		});
	});

	it('must return empty array if items param is undefined', () => {
		searchSkus().then(res => {
			expect(res).toEqual([]);
		});
	});
});
