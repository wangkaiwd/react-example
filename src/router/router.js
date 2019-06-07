import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../App';
import routerConfig from './router.config';

const routerRoot = (
  <Router>
    <App>
      {
        routerConfig.map(router => {
          return (
            <Route path={router.key} com/>
          )
        })
      }
    </App>
  </Router>
);
