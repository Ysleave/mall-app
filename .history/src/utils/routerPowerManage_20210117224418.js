const powerManage = {
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
