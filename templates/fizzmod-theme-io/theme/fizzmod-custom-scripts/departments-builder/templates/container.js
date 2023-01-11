const containerBuilder = (categoriesData, department) => {
    let categoriesCols = [];

    const { id } = department;

    categoriesData.forEach(categoryData => {
        categoriesCols = [...categoriesCols, `flex-layout.col#category-card--${categoryData.id}`];
    });

    const template = {
        [`flex-layout.row#categories-cards--${id}`]: {
            "children": categoriesCols,
            "props": {
                "horizontalAlign": "left",
                "colSizing": "auto",
                "blockClass": "categories-cards-container"
            }
        }
    }

    return template;
}

module.exports = containerBuilder;