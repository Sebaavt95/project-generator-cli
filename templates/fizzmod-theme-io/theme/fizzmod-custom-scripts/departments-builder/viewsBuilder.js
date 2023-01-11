const path = require('path');
const cwd = process.cwd();
const fs = require('fs');
const departmentsBuilder = require('./departmentsBuilder.js');
const { SanitizeStr } = require('./utils.js');
const dir = path.join(cwd, `store/blocks/departments`);

const viewsBuilder = (data) => {
    const categories = data;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    };
    
    categories.forEach(category => {
        const { name } = category;
        const nameSanitized = SanitizeStr(name);
        const filePath = path.join(cwd, `store/blocks/departments`, `${nameSanitized}.jsonc`);
        const jsoncStructure = departmentsBuilder(category);
        const jsonString = JSON.stringify(jsoncStructure, null, 2);

        fs.writeFileSync(filePath, jsonString)
    });
    
}

module.exports = viewsBuilder;