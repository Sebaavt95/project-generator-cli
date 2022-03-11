#!/usr/bin/env/ node

import Prompt from './lib/Prompt';
import Installer from './lib/Installer';

const init = async () => {
	const prompt = new Prompt();
	const response = await prompt.init();

	const { location, locationTemplate = '', projectName } = response;

	const replacements = {
		projectName,
	};

	const installer = new Installer(locationTemplate, location, replacements);
	await installer.build();
};

init();
