import axios from 'axios'  

require('dotenv').config()

const API_URL = process.env.REACT_APP_AWS_APIGATEWAY_BASE_URL
const API_KEY = process.env.REACT_APP_AWS_APIGATEWAY_API_KEY


const AxiosInstance = axios.create({
    baseURL: API_URL,  
    headers : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : API_KEY,
        'X-API-KEY': API_KEY
    }
});



const getAPI = (apiUrl,params) => AxiosInstance.get(apiUrl,params);

const postAPI = (apiUrl, data,params) => AxiosInstance.post(apiUrl, data,params);

const putAPI = (apiUrl, data,params) => AxiosInstance.put(apiUrl, data,params);

const deleteAPI = (apiUrl,data,params) => AxiosInstance.delete(apiUrl,data,params);

export { 
    postAPI,
    getAPI,
    putAPI,
    deleteAPI,
    API_URL
};
export default AxiosInstance;