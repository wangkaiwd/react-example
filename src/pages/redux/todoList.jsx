import React, { Component } from 'react';
import { Input, Button, List, Row, Col } from 'antd'
import styles from "./todoList.less";
import store from '@/store'
class TodoLIst extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

  render() {
    const { list, inputValue } = this.state
    return (
      <Row>
        <Col>
          <Input
            className={styles.writeInput}
            placeholder="input info"
            defaultValue={inputValue}
          />
          <Button type="primary">提交</Button>
          <List
            className={styles.list}
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
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
