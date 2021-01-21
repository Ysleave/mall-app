import axios from 'axios';
import QS from 'qs'; 
import store from '@/store'
/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
      // 401: 未登录状态，跳转登录页
      case 401:
          // toLogin();
          break;
      // 403 token过期
      // 清除token并跳转登录页
      case 403:
          // tip('登录过期，请重新登录');
          // localStorage.removeItem('token');
          // store.commit('loginSuccess', null);
          // setTimeout(() => {
          //     toLogin();
          // }, 1000);
          break;
      // 404请求不存在
      case 404:
          // tip('请求的资源不存在'); 
          break;
      default:
          console.log(other);   
}}
axios.defaults.baseURL=" https://mallapi.duyiedu.com/";

axios.interceptors.request.use(config => {
    console.log(config);
    
  return config
})

// appkey = testapi_1610801303765
// 响应拦截器
axios.interceptors.response.use(    
  // 请求成功
  res => res.data.status === 'fail' ? Promise.reject(res) : Promise.resolve(res),    
  // 请求失败
  error => {
      const { response } = error;
      if (response) {
          // 请求已发出，但是不在2xx的范围 
          errorHandle(response.status, response.data.message);
          return Promise.reject(response);
      } else {
          // 处理断网的情况
          // eg:请求超时或断网时，更新state的network状态
          // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
          // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
          // store.commit('changeNetwork', false);
      }
  });

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
  return new Promise((resolve, reject) =>{        
      instance.get(url, {            
          params: params        
      })        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
  });
}

/** 
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function post(url, params) {    
  return new Promise((resolve, reject) => {          
      axios.post(url, QS.stringify(params))        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
  });
}

export default axios;