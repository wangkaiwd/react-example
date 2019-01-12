import React, { Component } from 'react';
import { Button } from 'antd'
class ChildLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'hhh'
    }
    console.log('constructor')
  }

  // derive:得到，导出；源于，来自；(从...中)提取
  // 在render()方法之前调用
  // 调用时机：组件初始化和之后的更新。
  // 它应该返回一个对象来更新state或返回null表示什么都不更新
  static getDerivedStateFromProps(props, state) {
    console.log('props', props, state)
    // 这里相当于: 扩展运算符和Object.assign(),如果有的话就会替换，如果没有的话就新增
    return { name: props.name }
  }

  render() {
    console.log('render')
    const { name } = this.props
    return (
      <div>
        <Button type="primary">{name}</Button>
      </div>
    )
  }
}
class LifeCircle extends Component {
  state = {
    name: '刘备'
  }
  onClick = () => {
    const name = this.state.name === '刘备' ? '张飞' : '刘备'
    this.setState({ name })
  }
  render() {
    const { name } = this.state
    return (
      <div>
        <ChildLife name={name} />
        <Button style={{ marginTop: '10px' }} type="primary" onClick={this.onClick}>change</Button>
      </div>
    );
  }
}

export default LifeCircle;  