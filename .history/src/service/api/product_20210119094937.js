import { get, post } from '../axios.js';

//查询产品列表
export const apigetcategory = p => get('/category/all', p);