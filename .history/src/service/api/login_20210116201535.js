import { get, post } from '../axios.js';


export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);复制代码