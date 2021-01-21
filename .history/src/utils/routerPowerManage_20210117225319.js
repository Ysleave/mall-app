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
  customer: [...powerManage.baseManage],
  //管理者
  admin: [...powerManage.baseManage,{
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
function getMenuRouter(role,router){
   const allowRoutersName = powerManage[role].map(item =>item.name)
   console.log(allowRoutersName);
   
}
getMenuRouter(admin,'')