const { getAPI, postAPI} = require("./axios");

const getWritings = (params) => getAPI('/getwritings',params); //CORS
const getWriting = (params) => getAPI('/getwriting',params);

export { 
    getWritings,
    getWriting
} 