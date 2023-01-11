const getBannerContent = (templateName) => {
    return {
        [`flex-layout.row#institutional-content-${templateName}`]: {
            "props":{
                "blockClass": "banner__institutional__desktop",
                "horizontalAlign": "center",
                "preventHorizontalStretch": true
                },
              "children": [`flex-layout.col#banner-${templateName}-desktop` ] 
        },
        [`flex-layout.col#banner-${templateName}-desktop`] : {
            "children": [`image#image-${templateName}-desktop`],
              "props": {
                "blockClass": "banner__institutional__desktop"
              }
        },
        [`image#image-${templateName}-desktop`]: {
            "props": {
                "src": "https://via.placeholder.com/1240x734.png",
                "maxWidth": 1240
              }
        },
        [`flex-layout.row#institutional-content-${templateName}-phone`]: {
            "props":{
                "blockClass": "banner__institutional__phone",
                "horizontalAlign": "center",
                "preventHorizontalStretch": true
                },
              "children": [`flex-layout.col#banner-${templateName}-phone`]
        },
        [`flex-layout.col#banner-${templateName}-phone`]: {
            "children": [`image#image-${templateName}-phone`],
              "props": {
                "blockClass": "banner__institutional__phone"
              }
        },
        [`image#image-${templateName}-phone`]: {
            "props": {
                "src": "https://via.placeholder.com/320x188.png"
            }
        }
    };
};

module.exports = getBannerContent;