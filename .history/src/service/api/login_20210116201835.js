import { get, post } from '../axios.js';

//登录
export const apilogin = p => post('/passport/login', p);
//注册
export const apilogon = p => post('/passport/logon', p);
//找回密码
export const apifindBack = p => post('/passport/findBack', p);
//修改用户信息
export const apichangeUserInfo = p => post(' /passport/changeUserInfo', p);
//修改用户信息
export const apichangeUserInfo = p => post(' /passport/changeUserInfo', p);