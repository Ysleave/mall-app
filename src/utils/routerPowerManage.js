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
const baseManage = ["Product", "ProductList","ProductAdd","ProductEdit"];
const powerManage = {
  //顾客
  coustomer: [...baseManage],
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
export default function getMenuRouter(role,router){
   const allowRoutersName = powerManage[role];
   const resultRoutes = router.filter(item => {
     if(allowRoutersName.indexOf(item.name) !== -1){
       item.children = item.children.filter(child => allowRoutersName.indexOf(child.name) !== -1)
       return true
     }
     return false
   })
   return resultRoutes
}
