import { get, post } from '../axios.js';

//登录
export const apilogin = p => post('api/v1/users/my_address/address_edit_before', p);