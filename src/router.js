import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const getComponent = path => lazy(() => import(`@/pages/${path}`));
import App from './App';
import ErrorBoundary from '@/pages/errorBoundary';
import menuConfig from '@/config/menuConfig';
import Loading from '@/components/Loading';
// 缩小了bundle.js(缩小了一半)，但是新增了一个 1.chunk.js(比较大)
// 目前浏览器报错: 官方issue(https://github.com/ReactTraining/react-router/issues/6420)
// 暂时忽略报错信息，之后的话官方会进行fixed
const RouteConfig = (props) => {
  return (
    <Router>
      {/* <Suspense fallback={<Loading />}>
        <Route exact path='/test-01' component={getComponent('comment/commentBox')} />
      </Suspense> */}
      <App>
        {/* 错误边界 */}
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Route render={() => (
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
            )} />
          </Suspense>
        </ErrorBoundary>
      </App>
    </Router>
  )
}
export default RouteConfig
