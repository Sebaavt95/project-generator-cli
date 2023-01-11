const getDisclosureDeclaration = (templateName, number) => {
    const identificator = `${templateName}-${number}` ;

    return {
        [`disclosure-layout#${identificator}`]: {
            "props": {
              "animated": true
            },
            "children": [`disclosure-trigger#${identificator}`, `disclosure-content#${identificator}`]
          },
          [`disclosure-trigger#${identificator}`]: {
            "props": {
              "blockClass": "question",
              "as": "div"
            },
            "children": ["disclosure-state-indicator", `rich-text#${identificator}-question`]
          },
          [`disclosure-content#${identificator}`]: {
            "props": {
              "blockClass": "answer"
            },
            "children": [`rich-text#${identificator}-answer`]
          },
          [`rich-text#${identificator}-question`]: {
            "props": {
              "text": `¿Question ${number}?`
            }
          },
          [`rich-text#${identificator}-answer`]: {
            "props": {
              "text": `Answer ${number}`
            }
          }
    };
}


const getDisclosureLayout = (quantityOfQuestions, templateName) => {
    
    quantityOfQuestions = Number(quantityOfQuestions);
    const arrayChildren = [];
    let allDeclarations = {};
    
    for (let i = 1; i <= quantityOfQuestions; i++) {
      arrayChildren.push(`disclosure-layout#${templateName}-${i}`);
      allDeclarations = {...allDeclarations, ...getDisclosureDeclaration(templateName, i)} 
    }

    const disclosureLayoutGroup = {
        [`disclosure-layout-group#${templateName}`]: {
            "children": arrayChildren
          }
    };

    return {...disclosureLayoutGroup, ...allDeclarations};

};

const getQuestionsContent = (templateName, quantityOfQuestions) => {
    const row = {
        [`flex-layout.row#institutional-content-${templateName}`]: {
            "children": [`flex-layout.col#${templateName}-main-container`],
            "props": {
                "blockClass": "preguntas-frecuentes"
            }
        },
        [`flex-layout.col#${templateName}-main-container`]: {
            "children": [
                `disclosure-layout-group#${templateName}`
            ],
            "props": {
                "blockClass": "faqs-container"
            }
        }
    };

    return {...row, ...getDisclosureLayout(quantityOfQuestions, templateName)}
}

module.exports = getQuestionsContent;

