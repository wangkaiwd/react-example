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
