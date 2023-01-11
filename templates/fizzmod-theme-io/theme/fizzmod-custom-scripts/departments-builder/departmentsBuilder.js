const containerBuilder = require("./templates/container");
const categoriesBuilder = require("./templates/categories");
const headerBuilder = require("./templates/header");

const departmentsBuilder = (department) =>  {
    const categoriesData = department.children;
    
    const header = headerBuilder(department);
    const container = containerBuilder(categoriesData, department);
    const categories = categoriesBuilder(categoriesData);

    const renderCategories = (catgoriesData) => {
        let categoriesRender = {};

        catgoriesData.forEach(category => {
            categoriesRender = { ...categoriesRender, ...category }
        })

        return categoriesRender;
    }

    const categoriesRender = renderCategories(categories);

    const templates = {
        ...header,
        ...container,
        ...categoriesRender
    }

    return templates;
}

module.exports = departmentsBuilder;