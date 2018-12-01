import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd'
import ListItem from './ListItem'
class TodoList extends Component {
  state = {
    value: '',
    list: []
  }
  key = 1
  addList = () => {
    const { value, list } = this.state
    list.push({ key: this.key++, title: value })
    this.setState({ list, value: '' })
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.addList()
    }
  }
  deleteList = (index) => {
    const { list } = this.state
    list.splice(index, 1)
    this.setState({ list })
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
