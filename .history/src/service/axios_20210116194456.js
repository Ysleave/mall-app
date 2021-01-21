import axios from 'axios';
import QS from 'qs'; 

axios.interceptors.request.use(config => {

  return config
})


// axios.interceptors.response.use(response  => {
  
//   return response 
// })