import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
const getComponent = (path) => lazy(() => import(`@/pages/${path}`))
import App from './App'
import menuConfig from '@/config/menuConfig'
const Chat = lazy(() => import('@/pages/Chat'))
const FormAntd = lazy(() => import('@/pages/FormHandle/FormSubmitAntd'))

export default () => (
  <Router>
    <App>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {menuConfig.map(menu => (
            <Route path={menu.path} component={getComponent(menu.realPath)} />
          ))}
        </Switch>
      </Suspense>
    </App>
  </Router>
);