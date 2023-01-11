const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const UTILS = require('./utils');
const { sanitizeString, createRoute, getJsonc, isNumberValidate } = UTILS;

const cwd = process.cwd();

const type = ['banner', 'text', 'questions'];

const METHODS = {
	async getSectionToMake() {

			const questions = [
				{
					type: 'list',
					name: 'institutionalsType',
					message: 'Specify type of institutional:',
					choices: type,
				},
                {
                    type: 'input',
                    name: `quantityOfQuestions`,
                    message: `Specify number of questions :`,
			  validate: isNumberValidate,
                    when(answer) {
                        return answer.institutionalsType === 'questions';
                    }
                },
				{
                    type: 'input',
                    name: `quantityOftexts`,
                    message: `Specify number of texts blocks :`,
			  validate: isNumberValidate,
                    when(answer) {
                        return answer.institutionalsType === 'text';
                    }
                },
				{
                    type: 'list',
                    name: `textWithTitles`,
                    message: `Text with titles? :`,
					choices: ["Yes", "No"],
                    when(answer) {
                        return answer.institutionalsType === 'text';
                    }
                },
                {
					type: 'input',
					name: `institutionalsNames`,
					message: `Specify the name of the institutional separated by a comma if there is more than one :`,
					validate: (answer) => {
						if(!answer) {
							return "Please, enter an answer"
						}
						return true;
					}
				}

			];
			
			const answer = await inquirer.prompt(questions);
			
			const dataSection = { ...answer }
			return Promise.resolve(dataSection);
	}
}


METHODS.getSectionToMake()
	.then(dataSection => {
		const { 
			institutionalsType,
			institutionalsNames,
			quantityOfQuestions,
			quantityOftexts,
			textWithTitles
			 } = dataSection;
		const namesOfTemplates = institutionalsNames.split(",");

		const dir = path.join(cwd, `store/blocks/institutionals`);
		if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
		};

		namesOfTemplates.forEach(templateName => {
			templateName = sanitizeString(templateName);
			const jsoncStructure = getJsonc(templateName, institutionalsType, quantityOfQuestions, quantityOftexts, textWithTitles);
			const jsonString = JSON.stringify(jsoncStructure, null, 2);

			const filePath = path.join(cwd, `store/blocks/institutionals`, `institutional-${templateName}.jsonc`);
			fs.writeFileSync(filePath, jsonString);
			createRoute(templateName);
		})
	})
	.catch(error => console.log(error))



