const powerManage = {
  //基础权限
  baseManage: [
    {
      name: "Product",
    },
    {
      name: "ProductList",
    },
    {
      name: "ProductAdd",
    },
  ],
  //顾客
  customer: [...baseManage],
  //管理者
  admin: [...baseManage,{
      name: "Category",
    },
  ],
};

/**
 *
 *
 * @export
 * @param {*} role
 * @param {*} router
 */
export default function(role,router){

}