import React from 'react';
import { Route, Switch } from 'react-router-dom';

const NestedRoute = (route) => {
  const childRoute = (route) => {
    if (route.routes) {
      return (
        <Switch>
          {route.routes.map(route => (<NestedRoute {...route} />))}
        </Switch>
      );
    }
    return null;
  };
  if (!route.component) {return null;}
  return (
    <Route
      path={route.path}
      render={props => {
        return (
          <route.component {...props} {...route}>
            {childRoute(route)}
          </route.component>
        );
      }}
    />
  );
};
export default NestedRoute;
