import React from 'react';

const lazyLoading = dir => React.lazy(() => import(`views/${dir}`));
const menuList = [
  {
    key: '/reactRouter',
    icon: '',
    title: 'reactRouter',
    children: [
      {
        key: '/reactRouter/basicRouting',
        icon: '',
        title: 'BasicRouting',
        component: lazyLoading('router-demo/BasicRouting'),
      },
      {
        key: '/reactRouter/nestedRouting',
        icon: '',
        title: 'NestedRouting',
        component: lazyLoading('router-demo/NestedRouting'),
      },
    ],
  },
  // {
  //   key: '/react-demo',
  //   icon: '',
  //   title: 'react-demo',
  // }
];
export default menuList;

// 只考虑2级菜单，3级以上还要考虑好的方法
const createRouterConfig = (menuList) => {
  let routerConfig = [];
  menuList.forEach(menu => {
    if (menu.component) {
      routerConfig.push(menu);
    }
    if (menu.children) {
      const temp = createRouterConfig(menu.children);
      if (temp.length > 0) {
        routerConfig = [...routerConfig, ...temp];
      }
    }
  });
  return routerConfig;
};
export const routerConfig = createRouterConfig(menuList);
