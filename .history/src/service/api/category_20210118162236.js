import { get, post } from '../axios.js';

//获取类目
export const apigetcategory = p => post('/category/all', p);