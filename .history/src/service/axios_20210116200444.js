import axios from 'axios';
import QS from 'qs'; 

var instance = axios.create({timeout: 1000 * 12});

axios.interceptors.request.use(config => {

  return config
})


// axios.interceptors.response.use(response  => {
  
//   return response 
// })