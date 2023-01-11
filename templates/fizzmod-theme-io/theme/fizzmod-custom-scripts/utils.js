const chalk = require('chalk');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { exec } = require('child_process');

const cwd = process.cwd();

const execute = (command, callback) => {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.log(error);
			return;
		}
		callback(stdout);
	});
};

const getVUConf = () => {
	const confPath = path.join(cwd, '../', 'vtex-uploader.conf');
	const confFile = fs.readFileSync(confPath, 'utf8');

	return JSON.parse(confFile);
};

const getManifest = () => {
	const manifestPath = path.join(cwd, 'manifest.json');
	const manifestFile = fs.readFileSync(manifestPath);

	return JSON.parse(manifestFile);
};

const log = message => {
	const logHeader = chalk.bold.green('fizzmod-custom-scripts:');
	console.log(`${logHeader} ${message}`);
};

const validateObj = (obj = {}) => !!(obj && obj.constructor === Object && Object.keys(obj).length);

const validateArr = (arr = []) => !!(arr instanceof Array && arr.length);

const getAndSetVendor = async () => {
	try {
		const { environments } = getVUConf();
		if (!validateObj(environments)) throw new Error('vtex uploader conf not valid');

		const vendors = Object.keys(environments);
		const selectedEnv = await getVendor(vendors);

		return setVendor(selectedEnv);
	} catch (err) {
		console.log(err);
		process.exit();
	}
};

const getVendor = async vendors => {
	if (!validateArr(vendors)) throw new Error('no vendors found');

	const options = [
		{
			type: 'list',
			name: 'selectedEnv',
			message: 'Select vendor:',
			choices: vendors
		}
	];

	const { selectedEnv } = await inquirer.prompt(options);
	return selectedEnv;
};

const setVendor = vendor => {
	const manifest = getManifest();
	const newManifest = { ...manifest, vendor };
	fs.writeFileSync('../store-framework/manifest.json', JSON.stringify(newManifest, null, 2));
	log(`${chalk.bold('manifest.json:')} vendor switched to ${chalk.bold.yellow(`${vendor}`)}`);
	return vendor;
};

module.exports = {
	cwd,
	execute,
	log,
	getVUConf,
	getManifest,
	validateObj,
	validateArr,
	getAndSetVendor,
	getVendor,
	setVendor
};
