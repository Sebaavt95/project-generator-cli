const fs = require('fs');

const getPathFromUrl = url => {
 if (!url) return;
 const [, , , path] = /^(\w+):\/\/([^\/]+)([^]+)$/.exec(url);
 return path;
};

const parseString = str =>
 str &&
 str
  .toLowerCase()
  .replace(/\s/gi, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const getItemsInstancesNames = itemsArray => {
 const desktopInstances = [];
 const mobileInstances = [];

 itemsArray.forEach(({ name }) => {
  if (!name) return;
  const desktopName = `menu-item#${parseString(name)}`;
  const mobileName = `menu-item#${parseString(name)}-mobile`;
  desktopInstances.push(desktopName);
  mobileInstances.push(mobileName);
 });

 return { desktopInstances, mobileInstances };
};

const getCategoriesMenuFile = categoryMenuPath => {
 const categoriesMenuFile = fs.readFileSync(categoryMenuPath);
 return JSON.parse(categoriesMenuFile);
};

const isDirEmpty = async dirname => {
 const files = await fs.promises.readdir(dirname);
 return files.length === 0;
};

const log = message => message && console.log(message);

module.exports = {
 getPathFromUrl,
 parseString,
 getItemsInstancesNames,
 getCategoriesMenuFile,
 isDirEmpty,
 log,
};
