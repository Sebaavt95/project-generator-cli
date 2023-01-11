const { default: axios } = require("axios");
const { getManifest, validateArr, log } = require("../utils");

const fetchCategoryTree = async () => {
    try {
        const manifest = getManifest();
        const vendor = manifest ? manifest.vendor : '';
        const url = `https://${vendor}.myvtex.com/api/catalog_system/pub/category/tree/2`;
        const resp = await axios.get(url);
        const data = validateArr(resp.data) ? resp : [];

        return data;
    } catch (e) {
        log(e);
    }
};

const sanitizeString = (str, rp)=>  {
    let replace = typeof rp === 'string' ? rp : '-';
    let string = str.toLowerCase();
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

module.exports = {
    fetchCat: fetchCategoryTree,
    SanitizeStr: sanitizeString,
};