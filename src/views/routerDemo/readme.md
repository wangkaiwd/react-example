## `react-router`实例教程
学习资源：  
* `react-router v4`官方文档
* `react-router v4`中文文档  

所有的`demo`练习都在：`routerDemo`文件夹下。

### `react-router`中的重要`api`
> 掌握了下面的这些`api`，基本上就可以掌握`react-router`的基本使用

* `Link`： 为你的应用提供导航功能，并且不会触发浏览器的刷新
* `NavLink`： 一个特殊版本的`Link`标签，在匹配到当前的地址后可以添加激活样式
* `Prompt`: 满足条件时提示用户是否离开当前页面
* `Redirect`： 导航到一个新的地址
* `Route`： 根据匹配的`path`来展示`component`对应的组件
* `Switch`: 渲染`Switch`中第一个`Route`或者`Redirect`匹配到的地址对应的组件

接下来我们实现第一个路由`demo`

### 第一个路由案例
要使用`react-router`需要在项目中安装依赖：  
```npm
yarn add react-router-dom
```
之后我们建立`BasicRouting.jsx`文件：  
```jsx harmony
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
function BasicRouting () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/users`}>Users</Link>
            </li>
          </ul>
        </nav>
        <Route path={`/`} exact component={Index}/>
        <Route path={`/about`} component={About}/>
        <Route path={`/users`} component={Users}/>
      </div>
    </Router>
  );
}
export default BasicRouting;
```
执行代码，我们就可以根据不同的路由地址来展示不同的组件了。

这里需要注意的一点：`Route`组件会展示所有的和`path`属性匹配的组件，所以我们要为`/`路径设置`exact`属性来进行精确匹配，这样在匹配`/about`和`/users`就不会还显示`Index`组件了。
