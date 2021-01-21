const powerManage = {
  baseManage: [
    {
      name: "Product",
    },
    {
      name: "ProductList",
    },
    {
      name: "productAdd",
    },
  ],
  //顾客
  customer: [...baseManage],
  //管理者
  admin: [...baseManage,{
      name: "category",
    },
  ],
};
