const { parseString, getItemsInstancesNames } = require('../utils');

const menuItemDesktop = (
 itemId,
 itemName,
 itemPath,
 itemTitle,
 itemTag,
 itemHasChildren,
 itemChildren,
 itemType
) => {
 const name = parseString(itemName);

 const isDepartment = itemType === 'department';
 const isCategory = itemType === 'category';

 const className = isDepartment
  ? '"department"'
  : `"category-level${isCategory ? '1' : '2'}"`;

 const itemBlocks = itemHasChildren
  ? `["vtex.menu@2.x:submenu#${name}-categories"]`
  : '[]';

 const { desktopInstances } = getItemsInstancesNames(itemChildren);
 const parsedChildrenNames = desktopInstances.map(
  childName => `"${childName}"`
 );

 const itemCategoriesMenu = itemHasChildren
  ? `
			,"vtex.menu@2.x:submenu#${name}-categories": {
				"children": ["vtex.menu@2.x:menu#${name}-categories"]
			},
			"vtex.menu@2.x:menu#${name}-categories": {
				"props": {
				"orientation": "vertical"
				},
				"children": [${parsedChildrenNames}]
			}
		`
  : '';

 return `
  "menu-item#${name}": {
   "props": {
    "id": "${itemId}/${name}",
    "type": "custom",
    "iconId": null,
    "highlight": false,
    "blockClass": ["categoryTreeItem", ${className}],
    "itemProps": {
     "type": "internal",
     "href": "${itemPath}",
     "noFollow": false,
     "tagTitle": "${itemTag}",
     "text": "${itemTitle}"
    }
   },
   "blocks": ${itemBlocks}
  }
	${itemCategoriesMenu}
 `;
};

module.exports = {
 menuItemDesktop,
};
