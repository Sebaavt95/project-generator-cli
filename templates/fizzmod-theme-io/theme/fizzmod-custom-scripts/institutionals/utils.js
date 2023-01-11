const path = require('path');
const fs = require('fs');
const TEMPLATES = require("./templates");
const { 
    getInstitutionalHeader,
    getQuestionsContent, 
    getTextContent, 
    getBannerContent 
} = TEMPLATES;

const cwd = process.cwd();

const capitalize = (templateName) => {
    let title = templateName.replace(/-/g, ' ');
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
};

const createRoute = (templateName) => {

    const filePath = path.join(cwd, `store`, `routes.json`);

    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, "{}");
    }
    
    try {
        const contents = fs.readFileSync(filePath, 'utf8');
        const jsonString = JSON.parse(!!contents ? contents : "{}");
        const newRouteFile = {...jsonString, [`store.custom#institutional-${templateName}`]: { path: `/institucional/${templateName}` }};
        const newRouteFileJson = JSON.stringify(newRouteFile, null, 2);
    
        fs.writeFileSync(filePath, newRouteFileJson);
        
    } catch (error) {
        console.log(error);
    }
}

const getJsonc = (templateName, institutionalsType, quantityOfQuestions, quantityOftexts, textWithTitles) =>  {
    
    let content;
    const title = capitalize(templateName);
    const header = getInstitutionalHeader(templateName, institutionalsType, title);

    if (institutionalsType === 'text') content = getTextContent(templateName, quantityOftexts, textWithTitles);
    if (institutionalsType === 'banner') content = getBannerContent(templateName);
    if (institutionalsType === 'questions') content = getQuestionsContent(templateName, quantityOfQuestions);
    
    const templateInstitutional = {...header, ...content};
    return templateInstitutional;
}

const sanitizeString = (str, rp) => {
    const replace = typeof rp === 'string' ? rp : '-';
    let string = str.toLowerCase().trim();
    string = string.replace(/[\[\]\(\)\-\{\}\^\,]/g, ''); 
  
    string = string.replace(/[àáâãäåª]/g, 'a');
    string = string.replace(/[éèëê]/g, 'e');
    string = string.replace(/[íìïî]/g, 'i');
    string = string.replace(/[óòöô]/g, 'o');
    string = string.replace(/[úùüû]/g, 'u');
    string = string.replace(/[ñ]/g, 'n');
    string = string.replace(/[ç]/g, 'c');
    string = string.replace(/ /g, replace);
    return string;
};

const isNumberValidate = (answer) => {
    if(!answer) {
        return "Please, enter an answer"
    }
    if (isNaN(answer) || 0 >= Number(answer)) {
        return "Please, enter a number greater than zero";
    }
    return true;
}

module.exports = {
    createRoute,
    getJsonc,
    sanitizeString,
    isNumberValidate
}