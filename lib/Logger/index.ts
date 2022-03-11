import chalk from 'chalk';

class Logger {
	log: (msg: string) => void;
	constructor() {
		this.log = console.log;
	}

	error(msg: string): void {
		const error = chalk.hex('#cc3300');
		this.log(error(msg));
	}

	warning(msg: string): void {
		const warning = chalk.hex('#ffcc00');
		this.log(warning(msg));
	}

	success(msg: string) {
		const success = chalk.hex('#339900');
		this.log(success(msg));
	}
}

export default Logger;
