const chalk = require('chalk');
const inquirer = require('inquirer');
const { getCategoriesFromVtex } = require('./api');
const {
  getHeaderCategoriesPaths,
  writeDepartmentFiles,
  setDepartmentsInMenu,
  removeFilesFromMenu,
  validateMenuFiles,
} = require('./categoryMenuActions');
const { log } = require('./utils');
const { validateArr } = require('../utils');

const inquirerOptions = {
  initialOptions: [
    {
      type: 'list',
      name: 'initialAction',
      message: 'Choose an action',
      choices: ['Add menu to theme/Update menu', 'Remove menu from theme'],
    },
  ],
  addOptions: [
    {
      type: 'list',
      name: 'addAction',
      message: 'There is already a category menu. Do you want to update it?',
      choices: ['Yes', 'No'],
    },
  ],
};

const addCategoryMenuToTheme = async () => {
  let chosenAddAction = null;

  const allCategories = await getCategoriesFromVtex();

  if (!validateArr(allCategories)) return 'Empty Category menu from Admin';

  const validationState = await validateMenuFiles();

  if (!validationState.isValid) {
    const { addOptions } = inquirerOptions || {};
    const { addAction } = await inquirer.prompt(addOptions);
    chosenAddAction = addAction;
  }

  if (chosenAddAction && chosenAddAction === 'No')
    return 'Category menu has not been updated';

  allCategories.forEach(department => writeDepartmentFiles(department));

  setDepartmentsInMenu(allCategories);

  return chosenAddAction === 'Yes'
    ? 'Category menu updated'
    : 'Category menu added to theme';
};

const removeCategoryMenuFromTheme = async () => {
  const { desktopHeaderPath, mobileHeaderPath } = getHeaderCategoriesPaths();

  const validationState = await validateMenuFiles();

  if (validationState.isValid) return validationState.message;

  removeFilesFromMenu(desktopHeaderPath);
  removeFilesFromMenu(mobileHeaderPath);

  setDepartmentsInMenu([]);

  return 'Category menu removed from theme';
};

const initScript = async () => {
  log(chalk.bold.green('Category Menu Script for VTEX IO sites'));

  const { initialOptions } = inquirerOptions || {};
  const { initialAction } = await inquirer.prompt(initialOptions);

  if (initialAction.includes('Add')) {
    const addActionMessage = await addCategoryMenuToTheme();
    log(chalk.bold.white(addActionMessage));
  } else {
    const removeActionMessage = await removeCategoryMenuFromTheme();
    log(chalk.bold.white(removeActionMessage));
  }
};

initScript();
