const getTextBlocksDeclaration = (templateName, number, textWithTitles) => {
        
    const textBlock = {
        [`rich-text#institutional-content-${templateName}-text-${number}`]: {
            "props": {
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "textAlignment": "LEFT",
                "textPosition": "CENTER",
                "blockClass": "institutional-content-text" 
            }
        } 
    };
    const titleBlock = {
        [`rich-text#institutional-content-${templateName}-title-${number}`]: {
            "props": {
                "text": `##### Titulo de prueba ${number}`,
                "textAlignment": "CENTER",
                "textPosition": "CENTER",
                "blockClass": "institutional-content-title"
            }
        }
    }

    if(textWithTitles === 'Yes') return {...textBlock, ...titleBlock}
    else return textBlock;

}
 

const getChildrens = (templateName, quantityOftexts, textWithTitles) => {
        
    quantityOftexts = Number(quantityOftexts);
    const arrayChildren = [];
    let allDeclarations = {};
    
    for (let i = 1; i <= quantityOftexts; i++) {
        if(textWithTitles === "Yes") arrayChildren.push(`rich-text#institutional-content-${templateName}-title-${i}`);
        arrayChildren.push(`rich-text#institutional-content-${templateName}-text-${i}`);
        allDeclarations = {...allDeclarations, ...getTextBlocksDeclaration(templateName, i, textWithTitles)};
    }

    const column = {
        [`flex-layout.col#institutional-content-${templateName}`]: {
            "children": arrayChildren
         }   
    };    
    
    return {...column, ...allDeclarations};

}

const getTextContent = (templateName, quantityOftexts, textWithTitles) => {
    const row = {
        [`flex-layout.row#institutional-content-${templateName}`]: {
            "children": [`flex-layout.col#institutional-content-${templateName}`],
            "props": {
                "blockClass":"institutional-content"
            }
        }
    };

    return {...row, ...getChildrens(templateName, quantityOftexts, textWithTitles)}

}   
   
module.exports = getTextContent;