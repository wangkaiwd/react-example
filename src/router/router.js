import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../App';
import { routerConfig } from './router.config';

const routerRoot = (
  <Router>
    <App>
      <Suspense fallback={<Spin size={'large'}/>}>
        {
          routerConfig.map(router => {
            return (
              <Route
                key={router.key}
                path={router.key}
                component={router.component}
              />
            );
          })
        }
        <Route path={'/'} exact component={() => <h1> I am default content</h1>}/>
      </Suspense>
    </App>
  </Router>
);
export default routerRoot;
