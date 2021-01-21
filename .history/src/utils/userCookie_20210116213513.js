import Cookies from 'js-cookie';

/**
 *设置cookies
 *
 * @param {Object} info  
 */
function setCookies (info){
   const arr = Object.entries(info);
   for(let i = 0; i < arr.length; i++){
     Cookies.set(arr[i][0],arr[i][1])
   }
   return true
}

function getUserCookies() {
  
}