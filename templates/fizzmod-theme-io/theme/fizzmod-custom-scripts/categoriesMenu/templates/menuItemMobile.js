const { parseString, getItemsInstancesNames } = require('../utils');

const menuItemMobile = (
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

 const blockClass = isDepartment ? '"department-mobile"' : '""';

 const itemBlocks = itemHasChildren
  ? `["vtex.menu@2.x:submenu.accordion#${name}-categories"]`
  : '[]';

 const seeAllMenuItem =
  isDepartment && itemHasChildren
   ? `
		,"menu-item#ver-todos-${name}": {
			"props": {
				"id": "ver-todos-${name}",
				"type": "custom",
				"iconId": null,
				"highlight": false,
				"blockClass": "menu-categories-see-all",
				"itemProps": {
					"type": "internal",
					"href": "${itemPath}",
					"noFollow": false,
					"tagTitle": "Ver todos",
					"text": "Ver todos"
				}
			}
  	}
	`
   : '';

 const { mobileInstances } = getItemsInstancesNames(itemChildren);
 const parsedChildrenNames = mobileInstances.map(childName => `"${childName}"`);

 const seeAllInstance = isDepartment ? `"menu-item#ver-todos-${name}",` : '';

 const itemCategoriesMenu = itemHasChildren
  ? `
			,"vtex.menu@2.x:submenu.accordion#${name}-categories": {
			"children": ["vtex.menu@2.x:menu#${name}-categories-mobile"]
			},
			"vtex.menu@2.x:menu#${name}-categories-mobile": {
			"props": {
				"orientation": "vertical"
				${isDepartment ? ',"blockClass": "menu-categories-accordion"' : ''}
			},
			"children": [${seeAllInstance}${parsedChildrenNames}]
			}
			${seeAllMenuItem}
 		`
  : '';

 return `
  "menu-item#${name}-mobile": {
   "props": {
    "id": "${itemId}/${name}",
    "type": "custom",
    "iconId": null,
    "highlight": false,
    "blockClass": ${blockClass},
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
 menuItemMobile,
};
