import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const getComponent = path => lazy(() => import(`@/pages/${path}`));
import App from './App';
import menuConfig from '@/config/menuConfig';
import Loading from '@/components/Loading';
// 缩小了bundle.js(缩小了一半)，但是新增了一个 1.chunk.js(比较大)
// 目前浏览器报错: 官方issue(https://github.com/ReactTraining/react-router/issues/6420)
// 暂时忽略报错信息，之后的话官方会进行fixed
const RouteConfig = () => {
  return (
    <Router>
      <App>
        <Suspense fallback={<Loading />}>
          <Route render={() => {
            return (
              <Switch>
                {menuConfig.map(menu => (
                  <Route
                    key={menu.realPath}
                    path={menu.routerPath}
                    component={getComponent(menu.realPath)}
                  />
                ))}
                <Redirect from="/" to={menuConfig[0].routerPath} />
              </Switch>
            )
          }} />
        </Suspense>
      </App>
    </Router>
  )
}
export default RouteConfig
