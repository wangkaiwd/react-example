import React, { Component } from 'react';
import { Input, Button, List, Row, Col } from 'antd'
import styles from "./todoList.less";
import axios from 'axios'
import { changeInputValueAction, addTodosAction, deleteTodosAction } from '@/store/actionCreaters'
import store from '@/store'
// ui组件：只负责页面内容的展示
// 容器组件：专门负责页面逻辑的处理
// 无状态组件：函数组件，并且没有生命周期函数
class TodoLIst extends Component {
  // constructor也是也是一个生命周期函数
  constructor(props) {
    // 在需要使用props的时候传入，不需要使用的时候可以不穿
    super(props);
    this.state = store.getState()
    // 注册监听器，当更新store中的state时候调用监听器中传入的函数
    store.subscribe(() => this.setState(store.getState()))
  }
  componentDidMount() {
  }
  handleChange = (e) => {
    // 创建action
    const action = changeInputValueAction(e.target.value)
    store.dispatch(action)
  }
  addItem = () => {
    const { inputValue } = this.state
    if (inputValue.trim() === '') return
    const action = addTodosAction()
    store.dispatch(action)
  }
  deleteItem = (index) => {
    const action = deleteTodosAction(index)
    store.dispatch(action)
  }
  render() {
    const { list, inputValue } = this.state
    return (
      <Row>
        <Col>
          <Input
            className={styles.writeInput}
            placeholder="input info"
            value={inputValue}
            onChange={this.handleChange}
          />
          <Button type="primary" onClick={this.addItem}>提交</Button>
          <List
            className={styles.list}
            size="small"
            bordered
            dataSource={list}
            renderItem={(item, i) =>
              (<List.Item
                className={styles.hand}
                onClick={() => this.deleteItem(i)}
              >
                {item}
              </List.Item>)
            }
          />
        </Col>
      </Row>
    );
  }
}

export default TodoLIst;
