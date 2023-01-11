const fs = require('fs');
const path = require('path');
const { mainTemplate } = require('./templates/mainTemplate');
const {
 parseString,
 getItemsInstancesNames,
 getCategoriesMenuFile,
 isDirEmpty,
} = require('./utils');

const cwd = process.cwd();

const HEADER_PATH = 'store/blocks/header';
const HEADER_MENU_FILE_PATH = `${HEADER_PATH}/menu.json`;
const CATEGORIES_MENU_PATH = path.join(cwd, HEADER_MENU_FILE_PATH);

const getHeaderCategoriesPaths = () => {
 const HEADER_CATEGORIES_PATH = `${HEADER_PATH}/categories`;
 return {
  desktopHeaderPath: `${HEADER_CATEGORIES_PATH}/desktop`,
  mobileHeaderPath: `${HEADER_CATEGORIES_PATH}/mobile`,
 };
};

const getDepartmentPaths = departmentName => {
 const { desktopHeaderPath, mobileHeaderPath } = getHeaderCategoriesPaths();
 const departmentNameFile = `/menu-${parseString(departmentName)}.json`;

 return {
  desktopPath: path.join(cwd, `${desktopHeaderPath}${departmentNameFile}`),
  mobilePath: path.join(cwd, `${mobileHeaderPath}${departmentNameFile}`),
 };
};

const writeDepartmentFiles = department => {
 const { name = '' } = department || {};

 try {
  const { desktopPath, mobilePath } = getDepartmentPaths(name);
  const { desktopTemplate, mobileTemplate } = mainTemplate(department);
  fs.writeFileSync(desktopPath, desktopTemplate);
  fs.writeFileSync(mobilePath, mobileTemplate);
 } catch (error) {
  console.log('Cannot write files', error);
 }
};

const setDepartmentsInMenu = departments => {
 const categoryMenuFile = getCategoriesMenuFile(CATEGORIES_MENU_PATH);

 try {
  const { desktopInstances, mobileInstances } =
   getItemsInstancesNames(departments);

  categoryMenuFile['vtex.menu@2.x:menu#departments'].children =
   desktopInstances;

  categoryMenuFile['vtex.menu@2.x:menu#categories-main-mobile'].children =
   mobileInstances;

  const updatedCategoriesMenuFile = JSON.stringify(categoryMenuFile, null, 2);
  fs.writeFileSync(CATEGORIES_MENU_PATH, updatedCategoriesMenuFile);
 } catch (error) {
  console.log('Cannot write file', error);
 }
};

const removeFilesFromMenu = currentPath => {
 const files = fs.readdirSync(currentPath);
 files.forEach(file => {
  const filePath = path.join(currentPath, file);
  fs.unlinkSync(filePath);
 });
};

const validateMenuFiles = async () => {
 const validation = {
  isValid: true,
  message: '',
 };

 const { desktopHeaderPath, mobileHeaderPath } =
  getHeaderCategoriesPaths(false);

 const desktopEmpty = await isDirEmpty(desktopHeaderPath);
 const mobileEmpty = await isDirEmpty(mobileHeaderPath);

 if (desktopEmpty || mobileEmpty)
  validation.message = 'Category menu is empty. Add a menu first';
 else validation.isValid = false;

 return validation;
};

module.exports = {
 getHeaderCategoriesPaths,
 writeDepartmentFiles,
 setDepartmentsInMenu,
 removeFilesFromMenu,
 validateMenuFiles,
};
