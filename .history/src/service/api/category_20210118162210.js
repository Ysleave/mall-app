import { get, post } from '../axios.js';

//获取类目
export const apiget = p => post('/passport/login', p);