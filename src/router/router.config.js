import React from 'react';

const lazyLoading = dir => React.lazy(() => import(`views/${dir}`));
const menuList = [
  {
    path: '/reactRouter',
    icon: '',
    title: 'reactRouter',
    routes: [
      {
        path: '/reactRouter/basicRouting',
        icon: '',
        title: 'BasicRouting',
        component: lazyLoading('routerDemo/BasicRouting'),
      },
      {
        path: '/reactRouter/nestedRouting',
        icon: '',
        title: 'NestedRouting',
        component: lazyLoading('routerDemo/NestedRouting'),
      },
      {
        path: '/reactRouter/routeConfig',
        icon: '',
        title: 'RouteConfig',
        component: lazyLoading('routerDemo/RouteConfig'),
      },
    ],
  },
  {
    path: '/reactDemo',
    icon: '',
    title: 'reactDemo',
    routes: [
      {
        path: '/reactDemo/commentBox',
        icon: '',
        title: 'commentBox',
        component: lazyLoading('reactDemo/01comment/CommentBox'),
      },
      {
        path: '/reactDemo/tabSelector',
        icon: '',
        title: 'tabSelector',
        component: lazyLoading('reactDemo/02tabSelector/TabSelector'),
      },
      {
        path: '/reactDemo/chatApp',
        icon: '',
        title: 'chatApp',
        component: lazyLoading('reactDemo/03chatApp/ChatApp'),
      },
      {
        path: '/reactDemo/clock',
        icon: '',
        title: 'clock',
        component: lazyLoading('reactDemo/04clock/Clock'),
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
    if (menu.routes) {
      const temp = createRouterConfig(menu.routes);
      if (temp.length > 0) {
        routerConfig = [...routerConfig, ...temp];
      }
    }
  });
  return routerConfig;
};
export const routerConfig = createRouterConfig(menuList);
