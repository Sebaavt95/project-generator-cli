const axios = require('axios');
const { getManifest } = require('../utils');

const getCategoriesFromVtex = async () => {
 const { vendor = '' } = getManifest();

 try {
  const url = `https://${vendor}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/50`;
  const options = {
   dataType: 'json',
   headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
   },
  };

  const { data } = await axios.get(url, options);
  return data;
 } catch (error) {
  console.log('error', error);
 }
};

module.exports = {
 getCategoriesFromVtex,
};
