import React, { Component } from 'react';
import { Input, Button, List, Row, Col } from 'antd'
import styles from "./todoList.less";
import store from '@/store'
class TodoLIst extends Component {
  // constructor也是也是一个生命周期函数
  constructor(props) {
    // 在需要使用props的时候传入，不需要使用的时候可以不穿
    super(props);
    this.state = store.getState()
    // 注册监听器，当更新store中的state时候调用监听器中传入的函数
    store.subscribe(() => this.setState(store.getState()))
  }
  handleChange = (e) => {
    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value: e.target.value
    }
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
          <Button type="primary">提交</Button>
          <List
            className={styles.list}
            size="small"
            bordered
            dataSource={list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
      </Row>
    );
  }
}

export default TodoLIst;
