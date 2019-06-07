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
        component: lazyLoading('routerDemo/BasicRouting'),
      },
      {
        key: '/reactRouter/nestedRouting',
        icon: '',
        title: 'NestedRouting',
        component: lazyLoading('routerDemo/NestedRouting'),
      },
    ],
  },
  {
    key: '/reactDemo',
    icon: '',
    title: 'reactDemo',
    children: [
      {
        key: '/reactDemo/commentBox',
        icon: '',
        title: 'commentBox',
        component: lazyLoading('reactDemo/01comment/CommentBox'),
      },
    ]
  }
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
