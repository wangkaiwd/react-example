import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import { routerConfig } from './router.config';
import NestedRoute from './NestedRoute';

const RouterRoot = () => (
  <Router>
    <App>
      <Suspense fallback={<Spin size={'large'}/>}>
        <Switch>
          <Route path={'/'} exact component={() => <h1> I am default content</h1>}/>
          {routerConfig.map(route => (<NestedRoute key={route.path} {...route}/>))}
        </Switch>
      </Suspense>
    </App>
  </Router>
);
export default RouterRoot;
