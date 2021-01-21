import { get, post } from '../axios.js';

//登录
export const apilogin = p => post('/passport/login', p);
//注册
export const apilogin = p => post('/passport/logon', p);
//找回密码
export const apilogin = p => post('/passport/login', p);