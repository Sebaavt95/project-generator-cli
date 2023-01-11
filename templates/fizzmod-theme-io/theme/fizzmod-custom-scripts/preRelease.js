const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const UTILS = require('./utils');

const { cwd, execute, log } = UTILS;

const unreleased = '## [Unreleased]';
const changelogPath = path.join(cwd, 'changelog.md');

const getChangelog = () => {
	if (!fs.existsSync(changelogPath)) throw new Error('Changelog not found.');
	const changelogFile = fs.readFileSync(changelogPath).toString() || '';
	if (!changelogFile) throw new Error('Changelog empty.');
	return changelogFile;
};

const getChangelogUpdateExtract = () => {
	const changelogUpdatePath = path.join(cwd, 'changelogUpdate.txt');
	const changelogUpdateFile = fs.readFileSync(changelogUpdatePath).toString();

	if (!changelogUpdateFile) throw new Error('Changelog not found.');

	const position = changelogUpdateFile.indexOf('###');

	if (position < 0) throw new Error('Malformed changelogUpdate file.');

	const extract = changelogUpdateFile.substring(position);
	log(`adding current extract to changelog file:\n${extract}`);
	return extract;
};

const runGitCommandsAndLog = actions => {
	if (actions.length) {
		actions.forEach(action => {
			const { name, status, code } = action;
			if (name && typeof name === 'string' && status && typeof status === 'string') {
				log(`${!code ? chalk.red('Error: ') : ''}${chalk.bold(`${name} ${status}.`)}`);
			}
			execute('git add . && git commit -m "rebuilding css - updating changelog" --no-verify', () =>
				log('files added and changes commited')
			);
			execute('git push', () => log(chalk.bold('preRelease completed.')));
		});
	}
};

const addChangelogExtract = () => {
	let changelog;
	let extract;
	let actions = [];
	try {
		changelog = getChangelog();
		extract = getChangelogUpdateExtract();
	} catch (e) {
		log(chalk.red.bold(e));
		actions.push({ name: 'Changelog', status: 'not updated', code: 0 });
	}
	const position = changelog.indexOf(unreleased) + unreleased.length;
	const newChangelog =
		changelog.slice(0, position) + '\n\n' + extract + changelog.slice(position);
	if (extract) fs.writeFileSync('changelog.md', newChangelog);
	if (fs.existsSync('changelogUpdate.txt')) fs.unlinkSync('changelogUpdate.txt');
	const changelogErrorAction = actions.find(action => action.name === 'Changelog' && action.code === 0);
	if (!changelogErrorAction) actions.push({ name: 'Changelog', status: 'updated successfully', code: 1 });
	runGitCommandsAndLog(actions);
};

function preRelease() {
	try {
		execute('npm run build', () => {
			log(chalk.bold('Sass files compiled. Theme CSS files built successfully.'));
			addChangelogExtract();
		});
	} catch {
		log(
			`${chalk.red.bold(
				'Sass build process error:'
			)} CSS files not built due to an error. Look for errors in the console above.`
		);
	}
}

preRelease();
