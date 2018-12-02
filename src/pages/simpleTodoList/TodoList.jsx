import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd'
import ListItem from './ListItem'
// 为什么在获取state里的值要浅拷贝
class TodoList extends Component {
  state = {
    value: '',
    list: []
  }
  key = 1
  addList = () => {
    this.setState((prevSate) => ({
      list: [
        ...prevSate.list,
        { key: this.key++, title: prevSate.value }
      ],
      value: ''
    }))
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState(() => ({ value }))
  }
  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.addList()
    }
  }
  deleteList = (index) => {
    this.setState((prevSate) => {
      const list = [...prevSate.list]
      list.splice(index, 1)
      return { list }
    })
  }
  // 1. 一个组件要从父组件接收参数
  // 2. 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  render() {
    const { list, value } = this.state
    return (
      <Row>
        <Col span={8}>
          <Input
            placeholder="请输入内容"
            value={value}
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
          />
        </Col>
        <Col span={16}>
          <Button
            type="primary"
            onClick={this.addList}
          >
            提交
          </Button>
        </Col>
        <ListItem
          list={list}
          deleteList={this.deleteList}
        />
      </Row>
    );
  }
}

export default TodoList;

// 当组件的state或者props发生改变的时候，render函数就会重新执行
// ref的值取决于节点的类型：
//  1. 不能在函数式组件上使用ref属性，因为它们没有实例
//  2. 当ref属性被用于一个普通的html元素时，React.createRef()将接收底层DOM元素作为
//     它的current属性以创建ref
//  3. 当ref属性被用于一个自定义类组件时，ref对象将接收该组件已挂载的实例作为它的current
