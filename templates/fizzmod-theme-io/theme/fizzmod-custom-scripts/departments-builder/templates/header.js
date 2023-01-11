const { SanitizeStr } = require("../utils");

const headerBuilder = (department) => {
    
    const { name, id } = department;
    const nameSanitized = SanitizeStr(name);

    const template = {
        [`store.custom#${nameSanitized}`]: {
            "blocks": [
                `responsive-layout.desktop#department--${id}`,
                `responsive-layout.tablet#department--${id}`,
                `responsive-layout.phone#department--${id}`
            ]
        },
        [`responsive-layout.desktop#department--${id}`]: {
            "children": [
                `flex-layout.row#department-container--${id}`
            ]
        },
        [`flex-layout.row#department-container--${id}`]: {
            "props": {
                "blockClass": "department-container"
            },
            "children": 
                [`flex-layout.col#department-content--${id}`]
            
        },
        [`responsive-layout.tablet#department--${id}`]: {
            "children": 
                [`flex-layout.row#department-container--${id}`]
            
        },
        [`responsive-layout.phone#department--${id}`]: {
            "children": 
                [`flex-layout.row#department-container--${id}`]
            
        },
        [`flex-layout.col#department-content--${id}`]: {
            "props": {
                "width": "100%"
            },
            "children": [
                `flex-layout.row#department-main-banner--${id}`,
                `rich-text#department-title--${id}`,
                `flex-layout.row#categories-cards--${id}`
            ]
        },
        [`flex-layout.row#department-main-banner--${id}`]: {
            "props":{
                "blockClass": "department__main__banner__container",
                "horizontalAlign": "center",
                "fullWidth": true
            },
            "children": 
                [`flex-layout.col#department-main-banner-slider--${id}`]
            
        },
        [`flex-layout.col#department-main-banner-slider--${id}`]: {
            "props":{
                "blockClass": "department__main__banner__slider__container",
                "fullWidth": true
            },
            "children": 
                [`list-context.image-list#department-main-banner-list-images--${id}`]
            
        },
        [`list-context.image-list#department-main-banner-list-images--${id}`]: {
            "children": [`slider-layout#department-main-banner-slider--${id}`],
            "props": {
                "images": [
                    {
                        "image": "https://via.placeholder.com/1239x299.png",
                        "mobileImage": "https://via.placeholder.com/1024x420.png"
                    },
                    {
                        "image": "https://via.placeholder.com/1239x299.png/09F/FFF",
                        "mobileImage": "https://via.placeholder.com/1024x420.png/09F/FFF"
                    },
                    {
                        "image": "https://via.placeholder.com/1239x299.png/08A/FFF",
                        "mobileImage": "https://via.placeholder.com/1024x420.png/08A/FFF"
                    }
                ]
            }
        },
        [`slider-layout#department-main-banner-slider--${id}`]: {
            "props": {
                "blockClass": "department__main__banner__slider",
                "itemsPerPage": {
                "desktop": 1,
                "tablet": 1,
                "phone": 1
                },
                "showNavigationArrows": "never",
                "showPaginationDots": "always",
                "infinite": true
            }
        },
        [`rich-text#department-title--${id}`]: {
            "props": {
                "textAlignment": "CENTER",
                "textPosition": "CENTER",
                "text": `### ${name}`,
                "blockClass": "department-title"
            }
        }
    }

    return template;
}

module.exports = headerBuilder;