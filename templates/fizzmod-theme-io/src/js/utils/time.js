const seconds = param => param * 1000;
const minutes = param => param * seconds(60);
const hours = param => param * minutes(60);
const days = param => param * hours(24);
const weeks = param => param * days(7);

export function minutesFromNow(param) {
	const now = new Date().getTime();
	return param ? now + minutes(param) : now;
}

export function hoursFromNow(param) {
	const now = new Date().getTime();
	return param ? now + hours(param) : now;
}

export function daysFromNow(param) {
	const now = new Date().getTime();
	return param ? now + days(param) : now;
}

export function weeksFromNow(param) {
	const now = new Date().getTime();
	return param ? now + weeks(param) : now;
}

export const getParseDate = dateString => {
	try {
		const check = Date.parse(dateString);
		if (Number.isNaN(Number(check))) throw new ReferenceError('No es una fecha válida');

		const monthsName = {
			1: 'Enero',
			2: 'Febrero',
			3: 'Marzo',
			4: 'Abril',
			5: 'Mayo',
			6: 'Junio',
			7: 'Julio',
			8: 'Agosto',
			9: 'Septiembre',
			10: 'Octubre',
			11: 'Noviembre',
			12: 'Deciembre'
		};

		let reference = dateString;

		// eslint-disable-next-line prefer-destructuring
		if (/\+/g.test(dateString)) reference = dateString.split(/\+/g)[0];

		const moment = new Date(reference);
		const day = moment.getDay();
		const date = moment.getDate();
		const year = moment.getFullYear();
		const month = moment.getMonth() + 1;
		const monthName = monthsName[month];
		const hour = moment.toTimeString().replace(/:[0-9]{2}\s.+\)$/i, '');

		return {
			day,
			date,
			year,
			month,
			monthName,
			hour
		};
	} catch (reason) {
		console.error(reason);
		return undefined;
	}
};
