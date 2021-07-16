const { getAPI, postAPI} = require("./axios");

const getWritings = (params) => getAPI('/getwritings',params); //CORS
const getWriting = (params) => getAPI('/getwriting',params);
const getUser = (params) => getAPI('/getuser',params)

export { 
    getWritings,
    getWriting,
    getUser
} 