  //基础权限
//  const baseManage = [
//     {
//       name: "Product",
//     },
//     {
//       name: "ProductList",
//     },
//     {
//       name: "ProductAdd",
//     },
// ];
const baseManage = ["Product", "ProductList","ProductAdd",];
const powerManage = {
  //顾客
  customer: [...baseManage],
  //管理者
  admin: [...baseManage,"Category",],
};

/**
 *根据角色返回对应的权限路由
 *
 * @export
 * @param {String} role
 * @param {Arrary} router
 */
function getMenuRouter(role,router){
   const allowRoutersName = powerManage[role]
   const resultRoutes = router.filter(item => {
     if(allowRoutersName.indexOf(item.name) !== -1){
       item.children = item.children.filter()
       return true
     }
     return false
   })
   return resultRoutes
}

getMenuRouter('admin',[])