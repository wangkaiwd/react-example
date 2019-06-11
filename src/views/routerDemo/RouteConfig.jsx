import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Sandwiches () {
  return <h2>Sandwiches</h2>;
}
function Tacos (props) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/reactRouter/routeConfig/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/reactRouter/routeConfig/tacos/cart">Cart</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
}
function Bus (props) {
  return (
    <div>
      <h3>Bus</h3>
      <ul>
        <li><Link to={'/reactRouter/routeConfig/tacos/bus/bus1'}>bus1</Link></li>
      </ul>
      {props.children}
    </div>
  );
}
function Bus1 () {
  return <h3>Bus1</h3>;
}
function Cart () {
  return <h3>Cart</h3>;
}
// 使用routes配置的时候需要考虑：
//  1. 该路由是否需要参数
//  2. 该路由是否需要登录后才能访问
//  3. 该路由是否有权限访问
//  4. 该路由是否需要在侧边栏展示
// then our route config
const routes = [
  {
    path: '/reactRouter/routeConfig/sandwiches',
    component: Sandwiches
  },
  {
    path: '/reactRouter/routeConfig/tacos',
    component: Tacos,
    routes: [
      {
        path: '/reactRouter/routeConfig/tacos/bus',
        component: Bus,
        routes: [
          {
            component: Bus1,
            path: '/reactRouter/routeConfig/tacos/bus/bus1'
          }
        ]
      },
      {
        path: '/reactRouter/routeConfig/tacos/cart',
        component: Cart
      }
    ]
  }
];
const childRoute = (route) => {
  if (route.routes) {
    return (
      <Switch>
        {route.routes.map(route => {
          return <RouteWithSubRoutes {...route} key={route.path}/>;
        })}
      </Switch>
    );
  }
  return null;
};
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes (route) {
  return (
    <Route
      path={route.path}
      render={props => {
        // 相当于一个组件的props，这样生成的路由对应的组件都是通过render渲染出来的
        // console.log('props', props);
        return (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes}>
            {childRoute(route)}
          </route.component>
        );
      }}
    />
  );
}
const Page = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/reactRouter/routeConfig/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/reactRouter/routeConfig/sandwiches">Sandwiches</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
};
function RouteConfig () {
  return (
    <Router>
      <Page>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Page>
    </Router>
  );
}
export default RouteConfig;
