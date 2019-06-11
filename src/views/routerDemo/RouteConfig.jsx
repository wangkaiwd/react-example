import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Sandwiches () {
  return <h2>Sandwiches</h2>;
}
function Tacos ({ routes }) {
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

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}
function Bus () {
  return <h3>Bus</h3>;
}
function Cart () {
  return <h3>Cart</h3>;
}
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
        component: Bus
      },
      {
        path: '/reactRouter/routeConfig/tacos/cart',
        component: Cart
      }
    ]
  }
];
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes (route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}
function RouteConfig () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/reactRouter/routeConfig/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/reactRouter/routeConfig/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}
export default RouteConfig;
