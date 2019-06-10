/**
 * 建立Index,About,Users3个组件，并通过/,/about,/users来进行路由跳转切换组件
 *
 * 需要注意的是`react-router-dom`是在组件中通过Route标签来进行展示，并不是像vue一样通过配置文件，结合router-view来进行展示，
 * 整体的设计思路还是有很大的区别
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index () {
  return <h2>Home</h2>;
}
function About () {
  return <h2>About</h2>;
}
function Users () {
  return <h2>Users</h2>;
}
function BasicRouting ({ match }) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`${match.url}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${match.url}/about`}>About</Link>
            </li>
            <li>
              <Link to={`${match.url}/users`}>Users</Link>
            </li>
          </ul>
        </nav>
        <Route path={`${match.path}/`} exact component={Index}/>
        <Route path={`${match.path}/about`} component={About}/>
        <Route path={`${match.url}/users`} component={Users}/>
      </div>
    </Router>
  );
}
export default BasicRouting;

