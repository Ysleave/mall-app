import Cookies from 'js-cookie';

/**
 *设置cookies
 *
 * @param {Object} info  
 */
export function setCookies (info){
   const arr = Object.entries(info);
   for(let i = 0; i < arr.length; i++){
     Cookies.set(arr[i][0],arr[i][1])
   }
   return true
}

export function getUserCookies() {
  return {
    email:Cookies.get('email'),
    appkey:Cookies.get('appkey'),
    role:Cookies.get('role'),
    username:Cookies.get('username'),
  }
}
export function removeUserCookies(){
    Cookies.remove('email');
    Cookies.remove('appkey');
    Cookies.remove('role');
    Cookies.remove('username');
    return true
}