const path = require('path');
const cwd = process.cwd();
const fs = require('fs');
const filePath = path.join(cwd, `store`, `routes.json`);
const contents = fs.readFileSync(filePath, 'utf8');
const jsonString = JSON.parse(!!contents ? contents : "{}");
const { SanitizeStr } = require('./utils.js');

const routesBuilder = (data) => {
    const categories = data;

    const renderDepartmentsRoutes = (categories) => {
        let categoriesRender = {};
        categories.forEach(category => {
            const { name } = category;
            const nameSanitized = SanitizeStr(name);
            const routeFile = {[`store.custom#${nameSanitized}`]: { path: `${nameSanitized}` }};
            categoriesRender = { ...categoriesRender, ...routeFile };
        })

        return categoriesRender;
    }
    
    try {
        const departamentsRoutes = renderDepartmentsRoutes(categories);
        const routes = {...jsonString, ...departamentsRoutes};
        const routesJson = JSON.stringify(routes, null, 2);
        fs.writeFileSync(filePath, routesJson);
    } catch (error) {
        console.log(error);
    }
}

module.exports = routesBuilder;