const categoriesBuilder = (categoriesData) => {
    let categories = [];

    categoriesData.forEach(category => {
        const { id, name, url } = category;
        const subcategories = category.children;
        let subcategoriesText = [];
        
        for (let i = 0; i < 4; i++) {
            if(subcategories[i]){
                const subcategory = `[${subcategories[i].name}](${subcategories[i].url}) \r`;
                const formatSubcategory = (i === 0) ? `- ${subcategory}` : subcategory;
                subcategoriesText = [...subcategoriesText, formatSubcategory];
            }
        }

        const formatSubcategories = subcategoriesText.join('- ');
        
        const template = {
                [`flex-layout.col#category-card--${id}`]: {
                    "children": [
                        `flex-layout.col#category-card-top--${id}`,
                        `flex-layout.col#category-card-bottom--${id}`
                    ],
                    "props": {
                        "blockClass": "department-page-category-card"
                    }
                },
                [`flex-layout.col#category-card-top--${id}`]: {
                    "children": [
                        `image#category-img--${id}`,
                        `rich-text#category-title--${id}`
                    ],
                    "props": {
                        "horizontalAlign": "center",
                        "verticalAlign": "top",
                        "blockClass": "department-page-category-card-top"
                    }
                },
                [`flex-layout.col#category-card-bottom--${id}`]: {
                    "children": [
                        `rich-text#subcategories-list--${id}`,
                        `link#category-link--${id}`
                    ],
                    "props": {
                        "horizontalAlign": "center",
                        "verticalAlign": "top",
                        "blockClass": "department-page-category-card-bottom"
                    }
                },
                [`image#category-img--${id}`]: {
                    "props": {
                        "src": "https://via.placeholder.com/200x200.png/09F/FFF",
                        "alt": `${name}`,
                        "link": `${url}`,
                        "blockClass": "category-card-img"
                    }
                },
                [`rich-text#category-title--${id}`]: {
                    "props": {
                        "textAlignment": "CENTER",
                        "textPosition": "CENTER",
                        "text": `#### ${name}`,
                        "textColor": "c-on-base",
                        "blockClass": "category-card-title"
                    }
                },
                [`rich-text#subcategories-list--${id}`]: {
                    "props": {
                        "textAlignment": "CENTER",
                        "textPosition": "CENTER",
                        "textColor": "c-on-muted-2",
                        "blockClass": "category-card-subcategories",
                        "text": `${formatSubcategories}`
                    }
                },
                [`link#category-link--${id}`]: {
                    "props": {
                        "label": "Ver todos",
                        "href": `${url}`,
                        "blockClass": "category-card-cta"
                    }
                }
            }
            
        categories = [...categories, template];
    });

    return categories;
}

module.exports = categoriesBuilder;