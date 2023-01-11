import { EXPRESSIONS } from './helpers-utils';
import { Utils } from './utils';

/**
 * @description Diferentes tipos de validaciones.
 * @author Pablo E. Guzmán <pablo.guzman@fizzmod.com>
 * @version 1.0.0
 * @namespace Core.Validate
 * @memberof Core
 */

export const Validate = {
	/**
	 * Validaciones en base a expresiones regulaes.
	 * @memberof Core.Validate.checkIf('iPhone5'); // false, Se define en base al viewport
	 */
	checkIf(type, value = undefined) {
		switch (type) {
			case 'url':
				return value && EXPRESSIONS.url.test(value);

			case 'onlyNum':
				return value && EXPRESSIONS.onlyNum.test(value);

			case 'email':
				return value && EXPRESSIONS.email.test(value);

			case 'date':
				return value && EXPRESSIONS.date.test(value);

			case 'onlyText':
				return value && EXPRESSIONS.onlyText.test(value) && !EXPRESSIONS.someNum.test(value);

			case 'textWithoutSpace':
				return value && EXPRESSIONS.onlyTextSpaces.test(value) && !/\s/g.test(value);

			case 'desktop':
				return Utils.compareResolutions('>', 'md');

			case 'mobile':
				return Utils.compareResolutions('<', 'md') || Utils.compareResolutions('<', 'xxs');

			case 'onlyPhone':
				return Utils.compareResolutions('<', 'xs');

			case 'iPhone5':
				return Utils.compareResolutions('<', 'xxs');

			default:
				return value && EXPRESSIONS.onlyTextSpaces.test(value);
		}
	}
};
