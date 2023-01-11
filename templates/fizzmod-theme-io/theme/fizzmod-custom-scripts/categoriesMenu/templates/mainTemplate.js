const { menuItemDesktop } = require('./menuItemDesktop');
const { menuItemMobile } = require('./menuItemMobile');
const { getPathFromUrl } = require('../utils');

const mainTemplate = department => {
 const {
  id,
  name,
  hasChildren,
  url,
  children: departmentChildren,
  Title,
  MetaTagDescription,
 } = department || {};

 const departmentPath = getPathFromUrl(url);

 const departmentItemDesktop = menuItemDesktop(
  id,
  name,
  departmentPath,
  Title,
  MetaTagDescription,
  hasChildren,
  departmentChildren,
  'department'
 );

 const departmentItemMobile = menuItemMobile(
  id,
  name,
  departmentPath,
  Title,
  MetaTagDescription,
  hasChildren,
  departmentChildren,
  'department'
 );

 const setCategoryTemplate = (children, itemType) => {
  const categoriesDesktop = [];
  const categoriesMobile = [];
  children.forEach(category => {
   const { id, name, hasChildren, url, children, Title, MetaTagDescription } =
    category || {};

   const categoryPath = getPathFromUrl(url);

   const itemDesktop = menuItemDesktop(
    id,
    name,
    categoryPath,
    Title,
    MetaTagDescription,
    hasChildren,
    children,
    itemType
   );

   const itemMobile = menuItemMobile(
    id,
    name,
    categoryPath,
    Title,
    MetaTagDescription,
    hasChildren,
    children,
    itemType
   );

   categoriesDesktop.push(itemDesktop);
   categoriesMobile.push(itemMobile);
  });

  return { categoriesDesktop, categoriesMobile };
 };

 const setCategories = () => {
  if (!hasChildren) return;

  const { categoriesDesktop, categoriesMobile } = setCategoryTemplate(
   departmentChildren,
   'category'
  );

  const strCategoriesDesktop = categoriesDesktop ? `,${categoriesDesktop}` : '';
  const strCategoriesMobile = categoriesMobile ? `,${categoriesMobile}` : '';

  return { strCategoriesDesktop, strCategoriesMobile };
 };

 const setSubcategories = () => {
  if (!hasChildren) return;

  const subCategoriesArray = departmentChildren.filter(
   subCategory => subCategory.hasChildren
  );

  let subCategoriesDesktop = [];
  let subCategoriesMobile = [];
  subCategoriesArray.forEach(({ children: subChildren }) => {
   const { categoriesDesktop, categoriesMobile } = setCategoryTemplate(
    subChildren,
    'subcategory'
   );
   subCategoriesDesktop.push(...categoriesDesktop);
   subCategoriesMobile.push(...categoriesMobile);
  });

  const strSubcategoriesDesktop = !!subCategoriesDesktop.length
   ? `,${subCategoriesDesktop}`
   : '';
  const strSubcategoriesMobile = !!subCategoriesMobile.length
   ? `,${subCategoriesMobile}`
   : '';

  return { strSubcategoriesDesktop, strSubcategoriesMobile };
 };

 const { strCategoriesDesktop = '', strCategoriesMobile = '' } =
  setCategories() || {};
 const { strSubcategoriesDesktop = '', strSubcategoriesMobile = '' } =
  setSubcategories() || {};

 const desktopTemplate = `
		{
			${departmentItemDesktop}${strCategoriesDesktop}${strSubcategoriesDesktop}
		}
	`;

 const mobileTemplate = `
		{
			${departmentItemMobile}${strCategoriesMobile}${strSubcategoriesMobile}
		}
	`;

 return { desktopTemplate, mobileTemplate };
};

module.exports = {
 mainTemplate,
};
