import { get, post } from '../axios.js';

//获取类目
export const apilogin = p => post('/passport/login', p);