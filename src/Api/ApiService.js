import axios from 'axios'
const App_url = 'http://localhost:8001/api/'

const ApiServices = axios.create({
    baseURL : App_url,
    headers : {
      'Content-Type': 'application/json'
    }
})

ApiServices.interceptors.request.use( 
  config => {
    // config.headers['project_id'] = project_id;
    return config;
  },
    error => {
    return Promise.reject(error);
  });

  export default ApiServices 