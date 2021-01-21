import { get, post } from '../axios.js';

//查询产品列表
export const apigetproductsList = p => get('/products/all', p);