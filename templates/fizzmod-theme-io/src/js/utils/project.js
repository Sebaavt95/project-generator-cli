import { formatPrice } from '@fizzmod/utils';
import VtexMasterData from '@fizzmod/master-data';
import { validateObj } from './utils';

const { env } = ENV;

export const masterData = new VtexMasterData(env);
export const MIN_PERCENTAGE_LIST_PRICE = 5;
export const MEASUREMENTS_TO_HIDE = ['un'];

/**
 * @name customFormatPrice
 * @description - Function to format all prices within the project (to unify)
 * @param {number} price - price value number to format
 * @param {boolean} zeros - false to remove decimals zeros
 * @returns {string} - string with formated price
 * @example customFormatPrice(200, true) // '$200,00'
 */
export const customFormatPrice = (price, zeros = true) => {
	if (!price) return '';

	let parsedPrice = formatPrice(price, '.', ',', 2, '$');

	if (!zeros) parsedPrice = parsedPrice.replace(',00', '');

	return parsedPrice;
};

/**
 * @name getPriceByUnitMultiplier
 * @param {number} price - price value to calculate
 * @param {number} unitMultiplier - unit multiplier configured in product from vtex
 * @returns {number} - calculated price
 */
export const getPriceByUnitMultiplier = (price, unitMultiplier = 1) => {
	if (!price || Number.isNaN(Number(price))) return;

	return Number(price) * unitMultiplier;
};

/**
 * @name getBestPriceFromSellingPrice
 * @param {number} price - selling price value to calculate
 * @param {number} unitMultiplier - unit multiplier configured in product from vtex
 * @returns {number} - calculated price
 */
export const getBestPriceFromSellingPrice = (price, unitMultiplier = 1) => {
	if (!price || Number.isNaN(Number(price))) return;

	return Number(price) / unitMultiplier;
};

/**
 * @name textPriceToNumber
 * @description - convert price in string format to number
 * @param {string} textPrice - price in string format
 * @returns {number} - parsed price number
 */
export const textPriceToNumber = textPrice => {
	if (!textPrice) return;

	if (typeof textPrice === 'number') return textPrice;
	const parsedPrice = textPrice && textPrice.replace(/[a-z]|[a-z]\$|\$|\.|,/gi, '');

	return Number(parsedPrice / 100);
};

/**
 * @name showListPrice
 * @description return if list price is greater than best price and the difference is greater than a given percentage
 * @param {string or number} listPrice
 * @param {string or number} bestPrice
 * @param {string or number} minPercentage
 * @example showListPrice(1000, 800, 5) // true
 */
export const showListPrice = (
	listPrice = 0,
	bestPrice = 0,
	minPercentage = MIN_PERCENTAGE_LIST_PRICE
) => {
	const listPriceToNumber = Number(listPrice);
	const bestPriceToNumber = Number(bestPrice);
	const percentage = Number(minPercentage);

	if (
		!listPrice ||
		listPriceToNumber <= bestPriceToNumber ||
		Number.isNaN(listPriceToNumber) ||
		Number.isNaN(bestPriceToNumber) ||
		Number.isNaN(percentage)
	)
		return false;
	const difPercentage = ((listPriceToNumber - bestPriceToNumber) / listPriceToNumber) * 100;
	return difPercentage >= minPercentage;
};

/**
 * @name getPricesDifferencePercent
 * @param {number} listPrice
 * @param {number} bestPrice
 * @returns {number} - Percent of difference between listPrice and bestPrice
 * @example getPricesDifferencePercent(200, 100) // 50
 */
export const getPricesDifferencePercent = (listPrice, bestPrice) => {
	const difference = listPrice - bestPrice;
	const percent = (difference * 100) / listPrice;

	return percent;
};

/**
 * @name getQuantityToShow
 * @description to obtain quantity to show string for quantity selector inputs
 * @param {object} param0
 * @returns {string} - string with quantity and measurement unit
 * @example getQuantityToShow({quantity: 1, measurementUnit: kg, unitMultiplier: 0.25}) // '0.25 kg'
 */
export const getQuantityToShow = (paramsObj = {}) => {
	if (!validateObj(paramsObj)) return '1';

	const {
		quantity = 1,
		measurementUnit = 'un',
		unitMultiplier = 1,
		measurementsToHide = MEASUREMENTS_TO_HIDE,
		maxDecimals = 3
	} = paramsObj;

	const measurementToShow = measurementsToHide.some(measurement => measurement === measurementUnit)
		? ''
		: measurementUnit;

	const parsedMultiplier = Number(unitMultiplier);
	const quantityToShow = !Number.isNaN(parsedMultiplier) ? quantity * parsedMultiplier : quantity;
	const parsedQuantityToShow = Number(quantityToShow.toFixed(maxDecimals));

	return `${parsedQuantityToShow} ${measurementToShow}`;
};

/**
 * @name getFirstAvailablePrices
 * @description - get list and best price of first available sku
 * @param {array} skus - array of skus
 * @param {object} selectedSku - object with sku data
 * @returns {object} - with list price and best price
 */
export const getFirstAvailablePrices = (skus = [], selectedSku) => {
	if (!skus || !skus.length) return {};

	const { available, bestPrice: currentBestPrice, listPrice: currentListPrice } = selectedSku;

	const firstAvailableProduct = skus && skus.length ? skus.find(item => item.available) : {};

	const { bestPrice: bestPriceBase = 0, listPrice: listPriceBase = 0 } =
		firstAvailableProduct || {};

	const bestPrice = available ? currentBestPrice : bestPriceBase;
	const listPrice = available ? currentListPrice : listPriceBase;

	return {
		bestPrice,
		listPrice
	};
};
