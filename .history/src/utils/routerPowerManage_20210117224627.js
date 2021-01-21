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
 *根据角色返回对应的权限路由
 *
 * @export
 * @param {String} role
 * @param {Arrary} router
 */
export default function(role,router){

}