import React, { Component } from 'react';
import SideMenu from '@/components/SideMenu';
import { withRouter } from 'react-router-dom'

// 之前好像有理解错误，通过Route的component或者render加载的组件自身就含有this.props.history,this.props.locaton等属性
// 不是通过上述情况加载的组件想要使用路由相关的属性和方法的时候要通过withRouer包装之后才可以
// 简单来讲就是非路由组件要使用路由方法需要通过withRouer来进行包装
@withRouter
class App extends Component {
  render() {
    console.log('appProps', this.props)
    return (
      <div className="app">
        <SideMenu />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;