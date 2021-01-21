import { get, post } from '../axios.js';
import axios from '@/service/axios'
//查询产品列表
export const apigetproductsList = p => get('/products/all', p);

//删除产品
export const removeproduct = p => axios.delete('/products')