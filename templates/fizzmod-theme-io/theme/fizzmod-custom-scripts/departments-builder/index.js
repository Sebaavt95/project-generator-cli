const viewsBuilder = require('./viewsBuilder.js');
const routesBuilder = require('./routesBuilder.js');
const chalk = require('chalk');
const { log, validateArr } = require('../utils.js');
const { fetchCat } = require('./utils.js');


const fetchCategories = async () => {
	try {
		const resp = await fetchCat();

		if (!resp) {
			throw new Error(`${chalk.bold.red('Invalid fetch.')}`);
		}

		const { data } = resp;

		if (!validateArr(data)) {
			throw new Error(`${chalk.bold.red('Data is empty.')}`);
		}

		routesBuilder(data);
		viewsBuilder(data);
	} catch(e) {
		log(e);
	}
}

fetchCategories();