const getInstitutionalHeader = (templateName, institutionalsType, title) => {
    return {
        [`store.custom#institutional-${templateName}`]: {
            "blocks": [`responsive-layout.desktop#${templateName}`, 
                `responsive-layout.tablet#${templateName}`,
                `responsive-layout.phone#${templateName}`]
        },
        [`responsive-layout.desktop#${templateName}`]: {
            "children":[`flex-layout.row#header-${templateName}`, `flex-layout.row#institutional-content-${templateName}`]
        },
        [`responsive-layout.tablet#${templateName}`]: {
            "children":[`flex-layout.row#header-${templateName}`, `flex-layout.row#institutional-content-${templateName}`]
        },
        [`responsive-layout.phone#${templateName}`]: {
            "children":[`flex-layout.row#header-${templateName}`, institutionalsType === 'banner' ? `flex-layout.row#institutional-content-${templateName}-phone` : `flex-layout.row#institutional-content-${templateName}`]
        },
        [`flex-layout.row#header-${templateName}`]: {
            "children": [`rich-text#title-${templateName}`],
            "props": {
                "blockClass": "institutional-title-container"
            }
        },    
        [`rich-text#title-${templateName}`]: {
            "props": {
                "text": `### ${title}`,
                "textAlignment": "CENTER",
                "textPosition": "CENTER",
                "blockClass": "institutional-title"
            }
        }
    }
}

module.exports = getInstitutionalHeader;