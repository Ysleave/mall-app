import axios from 'axios';
import QS from 'qs'; 
console.log(QS);

axios.interceptors.request.use(config => {

  return config
})


// axios.interceptors.response.use(response  => {
  
//   return response 
// })