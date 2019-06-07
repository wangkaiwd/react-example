/**
 * 建立3个一级路由组件： Home,About,Topics
 * 在topics组件下建立二级路由组件：Topic
 * 在Topics组件下设置下边的子路由：
 *  1. 默认子路由： <h3>Please select a topic.</h3>
 *  2. 通过id设置的动态路由：Topic
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function NestedRouting () {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  );
}

function Home () {
  return <h2>Home</h2>;
}

function About () {
  return <h2>About</h2>;
}

function Topic ({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function DefaultTopic () {
  return <h3>Please select a topic</h3>;
}

function Topics ({ match }) {
  console.log('match', match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic}/>
      {/*可以通过和上级路由相同的路径来设置默认子路由，但要注意需要添加exact属性*/}
      <Route
        exact
        path={match.path}
        component={DefaultTopic}
      />
    </div>
  );
}

function Header () {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default NestedRouting;
